import React, {useEffect} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/index';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Golfapparelmanufacturer from '../src/components/ServicesPages/Golf-apparel-manufacturer';
import Gymclothingmanufacturer from '../src/components/ServicesPages/Gym-clothing-manufacturers';
import Sweatsuitmanufacturer from '../src/components/ServicesPages/Sweatsuit-Manufacturers';
import Tennisclothingmanufacturer from '../src/components/ServicesPages/Tennis-clothing-manufacturer';
import Yogawearmanufacturer from '../src/components/ServicesPages/Yoga-wear-manufacturer';
import Cyclingclothingmanufacturers from '../src/components/ServicesPages/Cycling-clothing-manufacturers';


function App() {
 
  return (
    <HashRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Golfapparelmanufacturer" element={<Golfapparelmanufacturer />} />
      <Route path="/Gymclothingmanufacturer" element={<Gymclothingmanufacturer />} />
      <Route path="/Sweatsuitmanufacturer" element={<Sweatsuitmanufacturer />} />
      <Route path="/Tennisclothingmanufacturer" element={<Tennisclothingmanufacturer />} />
      <Route path="/Yogawearmanufacturer" element={<Yogawearmanufacturer />} />
      <Route path="/Cyclingclothingmanufacturers" element={<Cyclingclothingmanufacturers />} />


    </Routes>
    <Footer/>
  </HashRouter>
  );
}

export default App;
