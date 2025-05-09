import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPlant from './pages/MyPlant';
import AddPlant from './pages/AddPlant';
import InformationPlant from './pages/InformationPlant';
import MyProfile from './pages/MyProfile';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myplant' element={<MyPlant />} />
        <Route path='/addplant' element={<AddPlant />} />
        <Route path='/informationplant' element={<InformationPlant />} />
        <Route path='/myprofile' element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
