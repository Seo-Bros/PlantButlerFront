import os
import requests
import openai

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
REPO = os.getenv("GITHUB_REPOSITORY")
PR_NUMBER = os.getenv("PR_NUMBER")

def get_pr_diff(repo, pr_number):
    url = f"https://api.github.com/repos/{repo}/pulls/{pr_number}/files"
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}"}
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    files = response.json()
    return "\n".join(file["patch"] for file in files if "patch" in file)

def generate_review(diff):
    openai.api_key = OPENAI_API_KEY
    prompt = f"다음 코드를 리뷰해줘:\n{diff}"
    response = openai.responses.create(
        model="gpt-4o",
        instructions="당신은 시니어 프론트엔드 개발자입니다. 사용하는 프레임워크는 React이며, TypeScript와 Vite를 이용합니다.",
        input=prompt
    )
    return response.output_text

def post_comment(repo, pr_number, comment):
    url = f"https://api.github.com/repos/{repo}/issues/{pr_number}/comments"
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json",
    }
    data = {"body": comment}
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()

def main():
    diff = get_pr_diff(REPO, PR_NUMBER)
    review = generate_review(diff)
    post_comment(REPO, PR_NUMBER, review)

if __name__ == "__main__":
    main()