import { Link } from 'react-router-dom';
import logo from "../logo.svg"

function Navbar() {
  return (
    <header className="oveflow-x-hidden fixed top-0 z-50 h-20 w-screen border-b border-b-neutral-200 bg-white shadow-sm">
      <div className="flex flex-row items-center justify-between px-4 ">
        <Link to="https://www.sqeholdings.com">
          <img src={logo} alt="sqe-logo" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;


// import logo from "../logo.svg"
// import {TbCurrencyNaira} from "react-icons/tb"
// import { BsCurrencyBitcoin,BsCurrencyDollar,BsCurrencyPound,BsCurrencyYen ,BsCurrencyEuro} from "react-icons/bs";
// import { AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
// import {BiEdit} from "react-icons/bi"
// import Button from "./button";
// import { useState ,useEffect,useContext} from "react";
// import NavSearch from "./Navseearch";
// import {MdOutlineStoreMallDirectory} from "react-icons/md"
// import { Link,useLocation } from "react-router-dom";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Modal } from "flowbite-react";
// import Search from "./search";
// import useAxios from "../hooks/useAxios"
// import { CurrencyContext } from "../context/CurrencyProvider";
// import { PostContext } from "./PostContext";
// import * as Dialog from '@radix-ui/react-dialog';

// export default function Nav(){
  

  
    
    
  
  
//     return (
      


//         < div className="shadow-md w-screen bg-white flex items-center fixed top-0 left-0  z-[20]">
//                   <Link to ="/">
//                   <img src={logo} alt="logo" className="md:ml-[35px]"/>
//                   </Link>  
          
//           </div>

           
  
//     )
// }

