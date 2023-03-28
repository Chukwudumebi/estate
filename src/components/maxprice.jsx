import { useState } from "react"

export default function Maxprice(){
    const[maxprice,setMaxprice]=useState("")
    return(
        <div className="flex justify-center border-b items-center">

          <span>Max Price:</span>
          <input type="text"/>

        </div>
    )
}