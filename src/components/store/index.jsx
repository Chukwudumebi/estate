
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import StoreHeader from './storeHeader';
import StoreItems from './storeItems';
function Store() {
 
  return (
    <div className="h-screen p-4 pt-24 pb-20 md:pb-10">
    <div className="grid h-full grid-rows-auto-1fr gap-6">
        <StoreHeader/>
        <StoreItems/>
     
        <div className="whatsss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
          <Link to="/" className=" ">
            <BsArrowLeftCircle />
          </Link>
        </div>
    </div>
  </div>
  );
}

export default Store;
