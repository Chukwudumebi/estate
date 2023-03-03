import Category from "../components/category";
import Maxprice from "../components/maxprice";
import NavSearch from "../components/Navseearch";
import Privateseller from "../components/privateseller";
import Region from "../components/region";
import countries from "../data/Countries.json"
import states from "../data/States.json"
import provinces from "../data/Provinces.json"
import { useEffect ,useState} from "react";
export default function Design() {
    const [country,setCountries]=useState([]);

    useEffect(()=>{
        setCountries(countries)
      },[])
    return (
        
          

          
          
        <div className=" relative mx-auto  w-full mt-1 md:mt-1  md:m-auto md:w-full max-w-3xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-3 px-4 text-center text-white">
                   <div className="grid grid-cols-2 gap-x-1 gap-y-1">

                    <Region  country={country} states={states}  provinces={provinces}/>
                    <Category />
                    <Privateseller />
            
            
                    
            

                    <Maxprice />
                    <div className="flex justify-center items-center mb-2">
                        <input type="checkbox"
                             />
                        <span className="font-bold ml-2 ">New Post</span>
                
                    </div>
                        <NavSearch />
                    </div>
        </div>
    )
}