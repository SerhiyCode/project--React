import { CORE_CONCEPTS } from "../data";
import CoreConcent from "./CoreConcent";


export default function() {
    return   <section id="core-concepts"> 
                <h2> Core Concepts! </h2>  
                <ul> 
                  {CORE_CONCEPTS.map((item) => (<CoreConcent key={item.title} {...item} />)  ) }                 
                </ul>
            </section> 
}