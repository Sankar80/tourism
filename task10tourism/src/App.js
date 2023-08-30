import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Nav.css";
import './App.css';
import PlacesToVisit from "./Navitem/PlacesToVisit";

import Navbar from "./Navbar";

import Place1 from "./Place1" 
import BestTimeToVisit from "./Navitem/BestTimeToVisit"


function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Place1 />} />
        <Route path="/PlacesToVisit" element={<PlacesToVisit />} />
        <Route path="/BestTimeToVisit" element={<BestTimeToVisit />} />
      </Routes>
 
    </div>
  );
}

export default App;
