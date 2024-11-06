import { Header } from "./Header";
import './Index.css'
import { MainTitles } from "./Main-titles";

export function Index()
{
    return(
        <>
        <div className="heroContainer w-full h-screen">
            <Header/>
            <MainTitles/>
        </div>
        </>
    )
}