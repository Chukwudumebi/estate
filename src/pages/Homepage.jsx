import Region from "../components/region"
import Category from "../components/category";
import Postlist from "./Postlist";
import Footer from "../components/footer";
import { useState,useEffect } from "react";
import countries from "../data/Countries.json"
import states from "../data/States.json"
import provinces from "../data/Provinces.json"
import Search from "../components/search";
console.log(countries)
export default function Homepage(){  
  const [country,setCountries]=useState([]);

  useEffect(()=>{
    setCountries(countries)
  },[])
 
    return(
        <div>
        <div className="homepage">
          <h1 className="shadow py-4 px-4 font-bold rounded w-[200px]  mb-3">
            Username: Hamid
          </h1>
          <Region country={country} states={states} provinces={provinces}/>
          <Category/>
          <h1 className="shadow text-center py-4 px-4 w-[200px]  mb-3 pl-6 font-bold rounded">YOURS</h1>
          <h1 className="shadow  text-center font-bold rounded w-[200px] px-4 py-4 mb-3">PUBLIC</h1>
        </div>
        

        <Postlist/>
        <Footer/>
        
      </div>

    )
}