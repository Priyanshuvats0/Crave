import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import { useRef, useEffect } from "react";
import Slider from "./components/Slider";
import IntegeratePage from "./pages/IntegeratePage";
import PinPage from "./pages/PinPage";


const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <div>
        <HomePage />
        <FeaturePage />
       <Slider/>
       <IntegeratePage/>
       <PinPage/>
       
  
      </div>
    </ReactLenis>
  );
};

export default App;
