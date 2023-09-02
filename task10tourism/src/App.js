import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Nav.css";
import './App.css';
import PlacesToVisit from "./Navitem/PlacesToVisit";
import Navbar from "./Navbar";
import Place1 from "./Place1" 
import BestTimeToVisit from "./Navitem/BestTimeToVisit"
import Food from "./Navitem/Food"
import Packages from "./Navitem/Packages/Packages"


function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Place1 />} />
        <Route path="/PlacesToVisit" element={<PlacesToVisit />} />
        <Route path="/BestTimeToVisit" element={<BestTimeToVisit />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/pk" element={<Packages />} />
      </Routes>
 
    </div>
  );
}

export default App;
