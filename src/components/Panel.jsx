import React from 'react'

const Panel = ({ leftBg, rightBg, leftImage, rightImage, rounded,textContent }) => {
  return (
    <section className="panel h-[100vh] flex items-center justify-center bg-black border-b-2 border-black">
    <div className="h-full w-[92%] flex justify-center items-center">
      <div className="w-full h-full flex">
        <div
          className={`w-1/2 h-full overflow-hidden ${leftBg} ${
            rounded ? "rounded-l-[2vw]" : ""
          }`}
        >
     {leftImage ? (
  <img src={leftImage} alt="" className="w-full h-full object-cover" />
) : (
  <div className="text-black flex flex-col  justify-center  px-16 py-8 h-full ">
    <h2 className="text-[4vw] font-bold mb-4 ">{textContent?.title}</h2>
    <p className="text-[1.5vw] font-medium text-gray-700 max-w-[90%] tracking-tighter leading-tight">{textContent?.description}</p>
  </div>
)}
        </div>
        <div
          className={`w-1/2 h-full overflow-hidden ${rightBg} ${
            rounded ? "rounded-r-[2vw]" : ""
          }`}
        >
       {rightImage ? (
  <img src={rightImage} alt="" className="w-full h-full object-cover" />
) : (
  <div className="text-black flex flex-col  justify-center  px-16 py-8 h-full">
    <h2 className="text-[4vw] font-bold mb-4 ">{textContent?.title}</h2>
    <p className="text-[1.5vw] font-medium text-gray-700 max-w-[90%] tracking-tighter leading-tight">{textContent?.description}</p>
  </div>
)}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Panel