import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Nav.css";
import './App.css';
import PlacesToVisit from "./Navitem/PlacesToVisit";

import Navbar from "./Navbar";

import Place1 from "./Place1" 


function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Place1 />} />
        <Route path="/PlacesToVisit" element={<PlacesToVisit />} />
      </Routes>
 
    </div>
  );
}

export default App;
