import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"

const IntegeratePage = () => {
  return (
    <div className='bg-[#000000] h-[40vw] overflow-hidden text-white'>
         <div className=' ml-[10vw] w-[100%] h-[100%] mt-[6vw]'>
            <span className='text-[2vw] font-bold  tracking-tighter'>Powerful and Simple Online Ordering</span><br/>
            <div className='text-[7vw]  tracking-tighter mt-[5vw] leading-[6vw]'>We integrate with <br/>every major point of <br/> sale system.</div>
            <div className='icon-container  h-[2vw] mt-[3vw] w-[60%] flex gap-6'>
                  <div className=' h-full flex font-bold items-center gap-2'>
                  <div className=" h-7 w-7  rounded-full bg-[#FEED01] flex items-center justify-center">
  <FaCheck className="text-black text-lg" />
</div>
                  App, Web & Catering
                  </div>
                  <div className=' h-full flex font-bold items-center gap-2'>
                  <div className=" h-7 w-7  rounded-full bg-[#FEED01] flex items-center justify-center">
  <FaCheck className="text-black text-lg" />
</div>
Order Aggregation
                  </div>
                  <div className='h-full flex font-bold items-center gap-2'>
                  <div className=" h-7 w-7  rounded-full bg-[#FEED01] flex items-center justify-center">
  <FaCheck className="text-black text-lg" />
</div>
Open API & Marketing CRM
                  </div>
                  
            </div>
         </div>
    </div>
  )
}

export default IntegeratePage