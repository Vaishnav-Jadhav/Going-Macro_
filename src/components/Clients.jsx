import { useState } from "react"


export function Clients()
{
    const[clientData]=useState({title:"Clients",subTitle:"Our team is trusted by enterprises, universities & large organizations"})

    const[clientBrands]=useState(["/assets/partnerBrandLogoA.png","/assets/partnerBrandLogoB.png","/assets/partnerBrandLogoC.png","/assets/partnerBrandLogoD.png","/assets/partnerBrandLogoE.png","/assets/partnerBrandLogoF.png","/assets/partnerBrandLogoG.png","/assets/partnerBrandLogoH.png"])

    return(
        <div className="w-full bg-[#00193b] text-white flex justify-center">
            <div className="w-[80%] lg:mt-[100px] mt-[30px] m-auto">
                <div className="w-full">
                   <div>
                     <p><span className="bg-white h-[1px] inline-block w-[30px] mb-2 lg:w-[100px]"></span>04</p>
                   </div>
                   <h2 className="text-[36px] md:text-[70px] lg:text-[90px] font-[550] leading-2">{clientData.title}</h2>
                   <h3 className="text-[16px] md:text-[16px] lg:text-[18px] leading-2">{clientData.subTitle}</h3>
                </div>
                <div className="w-full flex flex-wrap my-[50px] justify-center ">
                  {
                    clientBrands.map((value,index)=>
                    <div key={index} className="border m-3 lg:h-[300px] align-middle lg:w-[300px] p-3 lg:relative">
                        <img src={value} className="lg:absolute lg:top-[100px] lg:left-[50px]"/>
                    </div>)
                  }
                </div>
            </div>
        </div>
    )
}