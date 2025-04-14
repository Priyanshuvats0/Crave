import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[12vh] w-[75%] bg-[#000000] z-100 text-white fixed left-1/2 -translate-x-1/2 mt-[2vh] rounded-full flex justify-between items-center px-[5vh] '>

            <div className="logo text-3xl font-bold">CRAVE</div>
            <div className="list  flex gap-8 text-xl">
               <div>Company</div>
               <div>Product</div>
               <div>Resources</div>
            </div>
            <div className="butts  flex gap-5 w-[30%] flex-row-reverse ">
               <div className='bg-[#FEED01] text-black font-bold w-[40%] h-[7vh] rounded-full flex items-center justify-center'>Button1</div>
               <div className='bg-[#EBEBEB] text-black font-bold w-[40%] h-[7vh] flex items-center justify-center rounded-full'>Button2</div>
            </div>
        </div>
   
  )
}

export default Navbar