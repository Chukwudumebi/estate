import Category from "../components/category";
import Maxprice from "../components/maxprice";
import NavSearch from "../components/Navseearch";
import Privateseller from "../components/privateseller";
import Region from "../components/region";

export default function Design() {



    return (
        
          

          <div className="relative fixed  mx-auto mt-1 md:w-full max-w-3xl  justify-center rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-3 px-4 text-center text-white">
                   <div className="grid grid-cols-3 grid-flow-dense grid-rows-auto-1fr  ">

                    <Region />
                    <Category />
                    <Privateseller />
            
                   </div>
                    
                    <div className="flex justify-around gap-10 m-1 items-center">

                    <Maxprice />
                    <div className="flex justify-center items-center mb-2">
                        <input type="checkbox"

                            checked={" "} />
                        <span className="font-bold ml-2 ">New Post</span>
                    </div>
                    </div>
                    <NavSearch />
        
        



            
        







        </div>
    )
}