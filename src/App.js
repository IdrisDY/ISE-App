import './App.css';
import {Homepage,TextContent} from './Components/homepage';
import Menu from './Components/Menu'
import mainImg from './Components/assets/93.png'
import iphoneImg from './Components/assets/Dashboard_iphonexspacegrey_portrait.png'
import { Register } from './Components/Register';
import LoginPage from './Components/Login';
import { ThumbsUp } from './Components/ThumbsUp';
import Blow from './Components/Blow';
import Modal from './Components/Modal';
import Dashboard from './Components/Dashboard';
import HomepageIphone from './Components/homepageIphone';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router> 

    <div className="App">
      {/* <Homepage homeImg={iphoneImg}/>  */}
        {/* <Dashboard/> */}

      {/* <Blow/> */}
      <Routes>
      <Route path='/' element={
      <div>
    <Homepage homeImg={mainImg}/>
    <ThumbsUp/>
    <Blow/>  
    </div>
      }  />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/menu' element={<Menu/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/homepage' element={<HomepageIphone/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>

    </div> 
    </Router>

  );
}

export default App;
