import React from 'react'

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
import TouristPlaces from "./Compont/TouristPlaces"
import Home from './Compont/Home';

export const Place1 = () => {
  return (
    <div>
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
  )
}

export default Place1;
