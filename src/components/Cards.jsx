import { useState } from "react"


export function Cards()
{
    const[cardData]=useState([
        {img:"/assets/presence.png",title:"Pressence",discription:"Pressence is a creative agency that specializes in crafting compelling messaging. With a focus on copywriting, SEO, and content strategy, we help businesses elevate their brands and achieve unprecedented success.",btnLink:"www.hrefA.com"},
        {img:"/assets/blinkByte.png",title:"Blink Bytes AI",discription:"Blink Bytes AI is a digital product brand reshaping the digital space with innovative AI solutions that streamline tasks and make advanced AI accessible to businesses, agencies, and innovators.",btnLink:"www.hrefB.com"},
        {img:"/assets/corporate.png",title:"Corporate-FM",discription:"Corporate-FM is a podcast consulting and production agency, specializing in the creation of branded podcasts and corporate podcasts for companies.",btnLink:"www.hrefC.com"},
        {img:"/assets/OSO.png",title:"Cerulean Studio",discription:"Cerulean Studio is an award-winning design studio that doesn’t care about winning award. Striving for success, and pushing clients to show the best version of themselves.",btnLink:"www.hrefD.com"},
        {img:"/assets/intra.jpg",title:"Intra.FM",discription:"Intra.FM is an Enterprise audio-based LMS developed by Corporate-FM. Intra.FM empowers you to create high-quality, studio-grade training materials in a fraction of the time and cost associated with traditional methods",btnLink:"www.hrefE.com"}
    ])

    return(
            <div className="w-[100%]">
                   {
                    cardData.map((value,index)=>
                    <div className="card border-sky-950 p-3 rounded-md  lg:flex lg:justify-between my-8  bg-[#00132d] hover:scale-[1.02] hover:transition-[all]" key={index}>
                        <div className=" lg:flex justify-center align-middle">
                            <img src={value.img} alt="img" className="rounded-md lg:max-w-[400px]" />
                        </div>
                        <div className="md:flex flex-col justify-center align-middle">
                            <h3 className="text-[28px] md:text-[36px] lg:text-[36px] m-[20px] lg:m-[30px] font-[500]">{value.title}</h3>
                            <p className="text-[16px] lg:text-[20px] m-[20px] sm:w-3/4 lg:m-[30px]">{value.discription}</p>
                            <button className="lg:mx-[30px] bg-white m-[20px] p-1 lg:p-3 text-black font-[300] lg:w-[180px] sm:w-[180px] hover:bg-slate-300"><a href={value.btnLink}>contact us </a><span className="bi bi-arrow-right"></span></button>
                        </div>
                    </div>)
                   }
            </div>
    )
}