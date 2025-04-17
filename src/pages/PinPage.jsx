import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// const imageUrls = [
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F6TmGLGQLbqGa2pz5Knp9JB%2F90b05ef456d23d58e8d5e189f8319135%2FOrdering_1.png&w=1080&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F2e0PLHxMkBsVWVbgVOEFUk%2F522848f5f89e12314c2c8437ae34d595%2FCatering_2.png&w=1080&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2FHcCG60s8orT8OsXEP3jzX%2F3e45f52f2a926ddbd053faee76175f01%2FAggregation_3.png&w=1080&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F6T5zGYbyEoyt0avIc8WqsP%2F3374f0721ac97b302d9bb8e4689116bd%2FAPI.png&w=1080&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2FfXWpz666FhREfcnKaaQnH%2F5f0fa853932295ab220b0b05e8ba22ff%2FMarketing_2.png&w=1080&q=75"
//   ];
  

const PinPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        // Adding end property to determine when the pin should release
        end: index === panels.length - 1 ? 'top top' : '+=100%',
        markers:true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <section className="panel h-[100vh] flex items-center justify-center bg-black text-white text-4xl font-bold border-b-2 border-black">
      <div className="center bg-black h-[90%] w-[92%]  flex justify-center items-center">
         <div className="w-[96%]  h-[94%] flex">
          <div className="left h-[100%] w-[50%] rounded-l-[2vw] bg-white">
          <div className="l-top w-[100%] h-[50%]">
                 
           </div>
           <div className="l-bot">

           </div>
      </div>
          <div className="right h-[100%] w-[50%] rounded-r-[2vw]   bg-[#191919] overflow-hidden ">
          <img src="/public/Images/Ordering_1.avif" alt="" />
          </div>
           </div>
        </div> 
      </section>
      <section className="panel h-[100vh] flex items-center justify-center  bg-black text-white text-4xl font-bold border-b-2 border-black">
      <div className="center bg-black h-[100%] w-[92%]  flex justify-center items-center">
         <div className="w-[96%]  h-[100%] flex bg-white">
          <div className="left h-[100%] w-[50%]  bg-white overflow-hidden">
          <div className="l-top w-[100%] h-[100%]">
                 
          <img src="/public/Images/Catering_2.avif" alt="" />
           </div>
      </div>
          <div className="right h-[100%] w-[50%]    bg-white ">
         
          </div>
           </div>
        </div> 
      </section>
      <section className="panel h-[90vh] flex items-center justify-center bg-black text-white text-4xl font-bold border-b-2 border-black">
      <div className="center bg-black h-[100%] w-[92%]  flex justify-center items-center">
         <div className="w-[96%]  h-[100%] flex">
          <div className="left h-[100%] w-[50%]  bg-white overflow-hidden">
          <div className="l-top w-[100%] h-[50%]">
                 
           </div>
           <div className="l-bot">

           </div>
      </div>
          <div className="right h-[100%] w-[50%]    bg-[#191919] overflow-hidden ">
          <img src="/public/Images/Api.avif" alt="" />
          </div>
           </div>
        </div> 
      </section>
      <section className="panel h-[100vh] flex items-center justify-center bg-black text-white text-4xl font-bold border-b-2 border-black">
      <div className="center bg-black h-[100%] w-[92%]  flex justify-center items-center">
         <div className="w-[96%]  h-[100%] flex">
          <div className="left h-[100%] w-[50%]  bg-black overflow-hidden">
        
                 
          <img src="/public/Images/Aggregation_3.avif" alt="" />
        
      </div>
          <div className="right h-[100%] w-[50%]   bg-white ">
         
          </div>
           </div>
        </div> 
      </section>
      

      {/* Add this so next component can scroll into view */}
      {/* <div className="h-[100vh]"></div> */}
    </div>
  );
};

export default PinPage;
