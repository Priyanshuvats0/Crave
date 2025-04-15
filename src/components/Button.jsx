import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useState } from 'react';



const button = ({color,width}) => {
 const [is,setIs]=useState(true);

  return (
    // <div>
    //      <div className='bg-[#FEED01] text-black font-bold h-[7vh] rounded-full flex items-center justify-center'>Button1</div>
    // </div>
    
    <button className={`overflow-hidden w-[${width}] bg-[${color}] cursor-pointer  text-black font-bold h-[7vh] rounded-full flex items-center justify-center`} onMouseEnter={()=>{setIs(false)}} onMouseLeave={()=>{setIs(true)}}>
  {  is?(<div className='whitespace-nowrap text-xl font-bold'>Button1</div>): <motion.div
      className="whitespace-nowrap text-xl font-bold"
      animate={{
        x: ["150%", "-150%"], 
     
      }}
      transition={{
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 2, 
        ease: "linear",

          }}
    >
      Button1
    </motion.div>}
    
  </button>
  )
}

export default button