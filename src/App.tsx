import './App.css'
import { Routes, Route} from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPlant from './pages/MyPlant';
import AddPlant from './pages/AddPlant';
import InformationPlant from './pages/InformationPlant';
import MyProfile from './pages/MyProfile';

import Navigation from './components/Navigation';


function App() {

  return (
    <>
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
        <Route path={ROUTES.Login} element={<Login />} />
        <Route path={ROUTES.MyPlant} element={<MyPlant />} />
        <Route path={ROUTES.AddPlant} element={<AddPlant />} />
        <Route path={ROUTES.InformationPlant} element={<InformationPlant />} />
        <Route path={ROUTES.MyProfile} element={<MyProfile />} />
      </Routes>
      <Navigation />
    </>

  )
}

export default App
