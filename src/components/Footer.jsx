import { useState } from "react"

export function Footer()
{
    const[footerData]=useState([{img:"/assets/BrandLogo.png",paras:["© 2023 Going Macro, All Rights Reserved.","Going Macro SRL - P. IVA IT04086740133","info@goingmacro.it"],links:["Terms of Service ","- Privacy Statement"]}])

    return(
        <footer className="w-full bg-[#00132d] text-white p-[50px] flex justify-center">
           <div>
              {
               footerData.map((value,index)=>
               <div className="w-100" key={index}>
                   <div className="my-3 py-4 ms-11">
                       <img src={value.img} width={150} className="lg:ms-2"/>
                   </div>
                   <div className="my-2">
                       {
                           value.paras.map((spandata,index)=>
                           <span key={index} className="block">{spandata}</span>)
                       }
                   </div>
                   <div>
                       {
                           value.links.map((links,index)=>
                           <span key={index}>{links}</span>
                           )
                       }
                   </div>
               </div>)
              }
           </div>
        </footer>
    )
}