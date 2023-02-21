import { useState } from "react"

export default function Privateseller(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center">


        <div className="bg-white shadow text-center px-4 w-[200px] mb-3 py-3 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                        
                        <select className=" bg-white border-none focus:border-none" onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="public">
                            Private Seller </option>                         
                            <option value="NGN">NGN</option>                      
                          </select>
                        </div>

        </div>
    )
}