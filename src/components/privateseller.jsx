import { useState } from "react"

export default function Privateseller(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center">


<div
          className="rounded-full bg-white px-2 shadow-md font-bold py-2 mb-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
                        <select className=" bg-white border rounded-lg border-none focus:border-none focus:border" onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="Private Seller">
                            Private Seller </option>                         
                            <option value="Dealer/Store">Dealer/Store</option>                      
                          </select>
                        </div>

        </div>
    )
}