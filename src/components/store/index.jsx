import { FaPlus } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreHeader from './storeHeader';
import StoreItems from './storeItems';
import { StoresContext } from "../../context/storeContext";

function Store() {
 const {stores} =useContext(StoresContext)
 console.log(stores)
  return (
    <div className="h-screen p-4 pt-24 pb-20 md:pb-10">
      {stores.length < 1? 
        <div  className="flex mt-[40px] justify-center h-full grid-rows-auto-1fr mt-3 gap-6">

      
      <div className=" p-6 shadow-xl text-center rounded w-[300px] h-[200px]">
            <h1 className="font-bold mt-8">You Currently do not have a store.</h1>
            <Link to="/create-store">
            <button className="font-semibold p-2 mt-5 bg-sky-500 text-white rounded-sm shadow">Create a store</button>
            </Link>
      </div> 
      </div>: ""}
      {stores?.map((store)=>(
        <div key={store.id} className="grid h-full grid-rows-auto-1fr mt-3 gap-6">

        <StoreHeader store={store} />
        <StoreItems store={store}/>
     
        <div className="whatsss rounded-full bg-sky-600 flex justify-center  items-center shadow-xl w-[60px] h-[60px] hover:text-black">
          <Link to="/" className=" ">
            <BsArrowLeftCircle />
          </Link>
        </div>
        <div className="whatssss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
          <Link to="/create-store" >
          <FaPlus className="text-lg" />
            
          </Link>
        </div>
    </div>
          ))}
  </div>
  );
}

export default Store;
