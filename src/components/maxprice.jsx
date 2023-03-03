import { useState } from "react"

export default function Maxprice(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center items-center">

        
<div
          className="rounded-full bg-white shadow-md font-bold p-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
    
    
                        <select className=" bg-white border-none focus:border-none" onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="public">
                            Max Price </option>                         
                                                 
                          </select>
                        </div>
        </div>
    )
}