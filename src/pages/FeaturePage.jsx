import React from 'react'
import { useState,useEffect } from 'react';
// const images=["https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F3zccmzKjGdVRyUmwCTDGWj%2F086d7bd5334fc86255eab6d9cea7f9da%2F8_OpenAPI_Features_Website.png&w=1920&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F3zccmzKjGdVRyUmwCTDGWj%2F086d7bd5334fc86255eab6d9cea7f9da%2F8_OpenAPI_Features_Website.png&w=1920&q=75",
//     "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F3zccmzKjGdVRyUmwCTDGWj%2F086d7bd5334fc86255eab6d9cea7f9da%2F8_OpenAPI_Features_Website.png&w=1920&q=75"
// ]



const FeaturePage = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval); 
//   }, [images.length]);

  return (
    <div className='h-[60vw] w-full flex justify-center items-center overflow-hidden'>
    {/* //     <div className="center bg-black h-[90%] w-[92%] rounded-[4vw] flex justify-center items-center">
    //       <div className="w-[96%]  h-[94%] flex">
    //        <div className="left h-[100%] w-[50%] rounded-[2vw] ">
    //         <div className="l-top w-[100%] h-[50%]">
                 
    //         </div>
    //         <div className="l-bot">

    //         </div>
    //        </div>
    //        <div className="right h-[100%] w-[50%] rounded-[2vw]  border-2 border-[#696969] bg-[#191919]"></div>
    //        </div>
    //     </div> */}
        
            <img src="https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F3zccmzKjGdVRyUmwCTDGWj%2F086d7bd5334fc86255eab6d9cea7f9da%2F8_OpenAPI_Features_Website.png&w=1920&q=75"></img> 
        

    </div>
  )
}

export default FeaturePage