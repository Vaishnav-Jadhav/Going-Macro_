import { useState } from "react"


export function MainTitles()
{

    const[titlesData]=useState({title:"We are empowering change",subTitle:"We are Going Macro"})

    return(
         <div className="flex justify-center align-middle w-full h-screen relative">
            <div className="w-3/4 absolute top-[28%] lg:left-[15%] sm:left-[2%] p-14">
              <div>
                  <h1 className="text-[40px] lg:text-[90px] md:text-[70px] font-[550] text-white leading-[1] ">{titlesData.title}</h1>
              </div>
              <div className="mt-2">
                  <h2 className="text-[40px] lg:text-[90px] md:text-[70px] text-[#14A9FF] font-[550] leading-[1] md:leading-[1]">{titlesData.subTitle}</h2>
              </div>
            </div>
         </div>
    )
}