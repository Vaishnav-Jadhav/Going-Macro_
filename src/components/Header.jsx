import { useState } from "react"



export function Header()
{

    const[navBtns]=useState(["Mission","Brands","Partners"]);

    return(
        <header className="w-[70%] m-auto fixed top-7 left-[15%] pt-5 flex justify-between self-center text-white align-middle z-50">
            <div className="w-75">
                <img src="/assets/BrandLogo.png" alt="Brand-Logo" width={100}/>
            </div>
            <div className="flex justify-between align-content-center">
                <div className="lg:flex lg:align-middle hidden">
                    {
                        navBtns.map((value,index)=>
                        <button className="mx-4 px-1 text-[16px] hover:text-slate-600 hover:transition font-semibold" key={index}>{value}</button>)
                    }
                </div>
                <div>
                    <button className="bg-white text-black text-[16px] p-1 px-2 lg:p-3 hover:bg-slate-200">Contact Us <span className="bi bi-arrow-right"></span></button>
                </div>
            </div>
        </header>
    )
}