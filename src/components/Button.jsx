import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useState } from 'react';



const button = ({color,width}) => {
 const [is,setIs]=useState(true);
  console.log(color);
  return (
     <button className={`w-[8vw] overflow-hidden  bg-[${color}] cursor-pointer  text-black font-bold h-[7vh] rounded-full flex items-center justify-center`} onMouseEnter={()=>{setIs(false)}} onMouseLeave={()=>{setIs(true)}}>
  {  is?(<div className='whitespace-nowrap text-xl font-bold'>Button1</div>): <motion.div
      className="whitespace-nowrap text-xl font-bold"
      animate={{
        x: ["150%", "-150%"], 
     
      }}
      transition={{
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 2.5, 
        ease: "linear",

          }}
    >
      Button1
    </motion.div>}
    
  </button>
  )
}

export default button