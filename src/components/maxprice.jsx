import { useState } from "react"

export default function Maxprice(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center items-center">

        <div className="bg-white shadow  px-4 w-[200px] mb-3 py-3 font-bold text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                        
                        <select className=" bg-white border-none focus:border-none" onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="public">
                            Max Price </option>                         
                                                 
                          </select>
                        </div>
        </div>
    )
}