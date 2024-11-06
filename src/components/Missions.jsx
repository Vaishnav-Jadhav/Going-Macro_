import { useState } from "react";


export function Missions()
{
    const[data]=useState({title:"Mission", subtitle:"Transformation through Branding, Technology, and Strategy", img:"/assets/MissionCartImg.png", content:["Our approach to branding, technology, and strategy is centered around innovation and transformation to help businesses achieve unprecedented success.","We leverage the latest innovations and technologies to develop custom solutions that drive growth, increase efficiency, and enhance customer engagement."]})

    return(
        <div className="w-full bg-[#00132d] text-white lg:flex">
            <div className="lg:w-[80%]  lg:px-[100px] lg:mt-[100px] m-auto">
                <div className="p-6 flex flex-col gap-5">
                    <div className="leading-3">
                        <span className="text-[16px]"><span className="inline-block w-[30px] lg:w-[100px] h-[1px] mb-2 bg-white"></span>01</span>
                    </div>
                    <h2 className="lg:text-[90px] sm:text-[70px] text-[36px] leading-[100px] font-[500]">{data.title}</h2>
                    <h3 className="lg:text-[36px] sm:text-[24px] text-[24px] lg:w-3/4 leading-10 font-[600]">{data.subtitle}</h3>
                    <div>
                        {
                            data.content.map((value,index)=>
                                <div className="flex justify-between w-full" key={index}>
                                    <div className=" flex align-top mt-3 me-8">
                                        <span className="w-[30px] h-[2px] bg-white inline-block"></span>
                                    </div>
                                    <div>
                                        <p className="text-[18px]">{value}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div>
                <img src={data.img} className="lg:h-[730px] lg:max-w-[1250px]"/>
            </div>
        </div>
    )
}