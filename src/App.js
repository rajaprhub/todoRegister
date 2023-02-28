import logo from './logo.svg';
import './App.css';

import {AllRoutes} from "./Routes/AllRoutes";
import { Navbar } from './Routes/Navbar';
 import{Register} from"./Components/Register"


function App() {
  return (
    <div className="App">
            <Navbar/>
            <AllRoutes />
     
        
    </div>
  );
}

export default App;
