import './App.css';
import {Homepage,TextContent} from './Components/homepage';
import Menu from './Components/Menu'
import mainImg from './Components/assets/93.png'
import iphoneImg from './Components/assets/Dashboard_iphonexspacegrey_portrait.png'
import { Register } from './Components/Register';
import LoginPage from './Components/Login';
import { ThumbsUp } from './Components/ThumbsUp';
import Blow from './Components/Blow';

function App() {
  return (
    <div className="App">
      {/* <Homepage/>  */}
      {/* <Register/>  */}
      {/* <ThumbsUp/>  */}
      <Blow/>
    </div> 
  );
}

export default App;
