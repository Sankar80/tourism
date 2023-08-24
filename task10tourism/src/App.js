import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import './App.css';
import TouristPlaces from "./Compont/TouristPlaces"
import Home from "./Compont/Home";
import Chennai from "./Compont/Chennai";
import Rameswaram from "./Compont/Rameshwaram";
import Kodaikanal from "./Compont/Kodaikanal";
import Ooty from "./Compont/Ooty";
import Kanyakumari from "./Compont/Kanyakumari"
import Kumbakonam from "./Compont/Kumbakonam"
import Madurai from "./Compont/Madurai";
import Yarcaud from "./Compont/Yarcaud";
import Theni from "./Compont/Theni";
import Hogerakkal from "./Compont/Hogerakkal";


function App() {
  return (
    <div className="App">
      <header >
      <h3 className="log">TAMILNADU TOURISM</h3>
      <nav className="items">
        <a><Link to = "/">Home</Link></a>
        <a><Link to = "/PlacesToVisit">Places To Visit</Link></a>
        <a><Link to = "/BestTimeToVisit">Best Time To Visit</Link></a>
        <a><Link to = "/Packages">Packages</Link></a>
        <a><Link to = "/Destination">Destination</Link></a>
        <a><Link to = "/Food">Food</Link></a>
      </nav>
      </header>
      <Home />
      <TouristPlaces />
      <Chennai />
      <Rameswaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogerakkal />
    </div>
  );
}

export default App;
