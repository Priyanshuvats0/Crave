import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/button'

const HomePage = () => {
  return (
    <div className='w-full h-[120vh]'>
        <Navbar/>
        <div className="center w-[80vw] h-[72vh]  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4">
            <div className="top h-[50%] text-[7vw] tracking-tighter leading-[6vw] text-center pt-5 "><div>Enterprise Order</div>
            <div>Management at Scale</div>
            </div>
            <div className="bottom text-center text-[1.6vw] w-[50%] absolute left-1/2  transform -translate-x-1/2 tracking-tighter -mt-[1vw]">Lunchbox is the only open, scalable restaurant solution enabling B2B catering, multi-channel ordering, and guest engagement for enterprise operations on a single platform. Now with Order Aggregation included—free. </div>
            <div className='left-1/2 absolute bottom-1/9 -translate-x-1/2 '><Button color={'#FEED01'} width={'8vw'}/></div>
           
        </div>
    

    </div>
  )
}

export default HomePage