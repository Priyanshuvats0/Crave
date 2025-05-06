import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "../components/Panel";
import panelsData from "../data/panelsData";

gsap.registerPlugin(ScrollTrigger);

const PinPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: index === panels.length - 1 ? "top top" : "+=100%",
        markers: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {panelsData.map((props, index) => (
        <Panel key={index} {...props} />
      ))}
    </div>
  );
};

export default PinPage;
