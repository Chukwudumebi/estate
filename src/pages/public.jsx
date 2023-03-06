import { useState } from "react"

export default function Public(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center">


<div
          className="rounded-full bg-white shadow-md font-bold p-1  m-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
                        <select className=" bg-white border rounded-lg border-none focus:border-none focus:border" onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="Private Seller">
                            Public </option>                         
                            <option value="Dealer/Store">Private</option>                      
                          </select>
                        </div>

        </div>
    )
}