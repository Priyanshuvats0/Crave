import { img } from 'framer-motion/client'
import React from 'react'
import Marquee from 'react-fast-marquee'

const imageUrls = [
    "https://images.ctfassets.net/erglja63hoxc/xwok9TtlqX8uyeDq7mOSJ/b62d3329115a3ffd192a3389c2946e7a/Firehouse_Subs-logo.svg",
    "https://images.ctfassets.net/erglja63hoxc/4sEyJuvQsp3CAadCzJraB9/a694db58ba0c27db91ac2d6d4020ac5e/Friendlys.svg",
    "https://images.ctfassets.net/erglja63hoxc/4Dca2eHDtEYhwsCG85e9Y/825ca72d19212ee27a3344038c749ac2/Logo_Clean-Juice.svg",
    "https://images.ctfassets.net/erglja63hoxc/5klzXxGFARBRnXY3x0Adue/9c73423a6564e7a99ccb0fcddc21ad55/Chopt.svg",
    "https://images.ctfassets.net/erglja63hoxc/5f2FT55SzskzGPWlj3q2cZ/cd23d47cd096dfec1487aac6f3657f76/Torchys-logo.svg",
    "https://images.ctfassets.net/erglja63hoxc/78wGjgBcJ7QVvAOFfROCKE/63a4fce90928cef61c8d883e76059597/Taco_Cabana-logo.svg",
    "https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F5job4RUJkBR65EL7PFISK0%2Ffe607272ab9267497591e2cc9bf0a005%2FPeiWei.png&w=1920&q=75",
    "https://images.ctfassets.net/erglja63hoxc/6CiRSPt15KjW9WPxiDYNTM/3e02457677f46f7bb2ea0ef28bc8a5ba/ParisBaguette.svg"
  ]
  

const Slider = () => {
  return (
    <div className='w-full h-[15vw] mt-[1vh] bg-[#000000]'>
     <div className='text-white pt-[4vw]'>
        <Marquee className='' autoFill='true'>
          <img className='h-[60px] w-[176px]' src= "https://images.ctfassets.net/erglja63hoxc/xwok9TtlqX8uyeDq7mOSJ/b62d3329115a3ffd192a3389c2946e7a/Firehouse_Subs-logo.svg"></img>
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/4sEyJuvQsp3CAadCzJraB9/a694db58ba0c27db91ac2d6d4020ac5e/Friendlys.svg" alt="" />
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/4Dca2eHDtEYhwsCG85e9Y/825ca72d19212ee27a3344038c749ac2/Logo_Clean-Juice.svg" alt="" />  
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/5klzXxGFARBRnXY3x0Adue/9c73423a6564e7a99ccb0fcddc21ad55/Chopt.svg" alt="" />   
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/5f2FT55SzskzGPWlj3q2cZ/cd23d47cd096dfec1487aac6f3657f76/Torchys-logo.svg" alt="" />
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/78wGjgBcJ7QVvAOFfROCKE/63a4fce90928cef61c8d883e76059597/Taco_Cabana-logo.svg" alt="" />
          <img  className='h-[60px] w-[176px]'  src="https://lunchbox.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ferglja63hoxc%2F5job4RUJkBR65EL7PFISK0%2Ffe607272ab9267497591e2cc9bf0a005%2FPeiWei.png&w=1920&q=75" alt="" />
          <img  className='h-[60px] w-[176px]'  src="https://images.ctfassets.net/erglja63hoxc/6CiRSPt15KjW9WPxiDYNTM/3e02457677f46f7bb2ea0ef28bc8a5ba/ParisBaguette.svg" alt="" />
        </Marquee>
     </div>
    </div>
  )
}

export default Slider