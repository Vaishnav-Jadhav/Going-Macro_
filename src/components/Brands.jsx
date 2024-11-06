import { useState } from "react"
import { Cards } from "./Cards"


export function Brands()
{
    const[data]=useState({title:"Brands",subtitle:"A growing portfolio of growing brands.",discription:"Innovation come from contamination, and our multi-brand and cross-cultural approach helps us reach untouched levels of innovations."})

    return(
        <div className="w-full bg-[#00193b] text-white flex justify-center">
            <div className="w-[80%] lg:mt-[100px] mt-[30px] m-auto">
              <div className="w-full">
                  <div>
                      <span><span className="bg-white h-[1px] inline-block w-[30px] mb-2 lg:w-[100px]"></span>02</span>
                  </div>
                  <h2 className="text-[36px] lg:text-[90px] md:text-[70px] font-[500] leading-2 ">{data.title}</h2>
                  <div className="lg:w-2/4 text-[16px] md:text-[16px] lg:text-[18px] leading-2">
                    <span>{data.subtitle}</span><br/>
                    <span>{data.discription}</span>
                  </div>
              </div>
              <div className="my-[50px]">
                <Cards/>
              </div>
            </div>
        </div>
    )
}