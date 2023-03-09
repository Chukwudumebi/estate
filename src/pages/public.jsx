import { useState } from "react"

export default function Public(){
    const[maxprice,setMaxprice]=useState("")
    return(
        



                        <select className="bg-white  rounded-lg focus:border-none"  onChange={(e)=>setMaxprice(e.target.value)}>
                          <option value="Private Seller">
                            Public </option>                         
                            <option value="Dealer/Store">Private</option>                      
                          </select>
                        

    
    )
}