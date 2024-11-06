import { title } from "framer-motion/client"
import { useState } from "react"


export function Partners()
{

    const[partnersTitals]=useState({title:"Partners",Subtitle:"Recognizing our valued partners: exceptional consultants bringing expertise and knowledge to our team"});

    const[partnersData]=useState([{name:"Gaia Banfi",img:"/assets/PersonA.jpeg"},{name:"Marco Ceruti",img:"/assets/PersonB.png"},{name:"Salvatore Gazineo",img:"/assets/PersonC.jpg"},{name:"Edoardo Ares",img:"/assets/PersonD.jpg"},{name:"Gabriele Del Mugnaio",img:"/assets/PersonE.png"}])

    return(
        <div className=" w-full bg-[#00132d] text-white flex justify-center">
            <div className="w-[80%] lg:mt-[100px] mt-[30px] m-auto">
                <div className="w-full">
                    <p><span className="bg-white h-[1px] inline-block w-[30px] mb-2 lg:w-[100px]"></span>03</p>
                    <h2 className="lg:text-[90px] md:text-[70px] text-[36px] font-[550] leading-2">{partnersTitals.title}</h2>
                    <p className="w-2/4 text-[16px] md:text-[16px] lg:text-[18px] leading-2">{partnersTitals.Subtitle}</p>
                </div>
                <div className="w-full flex flex-wrap my-[50px]">
                    {
                        partnersData.map((value,index)=>
                        <div className="cart my-3" key={index}>
                            <div>
                              <img src={value.img} alt="img" className="max-w-[300px]" />
                            </div>
                            <h3 className="leading-2 my-3 text-[16px] md:text-[20px] lg:text-[20px] text-center">{value.name}</h3>
                            <div className="flex justify-center">
                                <a href="https://www.instagram.com/vaishnavvv__45"><span className="bi bi-instagram cursor-pointer m-2 text-[30px]"></span></a>
                                <a href="www.linkedin.com/in/vaishnavjadhav"><span className="bi bi-linkedin cursor-pointer m-2 text-[30px]"></span></a>
                                <a href="https://mail.google.com/mail"><span className="bi bi-envelope-fill cursor-pointer m-2 text-[30px]"></span></a>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}