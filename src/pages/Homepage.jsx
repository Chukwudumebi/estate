import Region from "../components/region"
import Category from "../components/category";
import Postlist from "./Postlist";
import Footer from "../components/footer";
import { useState,useEffect } from "react";
import countries from "../data/Countries.json"
import states from "../data/States.json"
import provinces from "../data/Provinces.json"
import Search from "../components/search";
import NavSearch from "../components/Navseearch";
import Maxprice from "../components/maxprice";
import Privateseller from "../components/privateseller";

export default function Homepage(){  
  const [country,setCountries]=useState([]);
  const [post,setPost]=useState(false)

  useEffect(()=>{
    setCountries(countries)
  },[])
 
    return(
      <>
        <div>
            <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
         
          <Region country={country} states={states} provinces={provinces}/>
          <Category/>
          <Privateseller/>
          <Maxprice/>
          <div className="flex justify-center items-center mb-2">
                          <input type="checkbox"
                          onChange={(e)=>setPost(e.target.checked)}
                           checked={post}/>
                           <span className="font-bold ml-2 ">New Post</span>                           
                        </div>
         
          <NavSearch/>
        </div>
      </div>
        

        <Postlist/>
        <Footer/>
      </>
        

    )
}