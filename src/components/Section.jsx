import { Brands } from "./Brands";
import { Clients } from "./Clients";
import { Missions } from "./Missions";
import { Partners } from "./Partners";


export function Section()
{
    return(
        <section className="w-full">
            <Missions/>
            <Brands/>
            <Partners/>
            <Clients/>
        </section>
    )
}