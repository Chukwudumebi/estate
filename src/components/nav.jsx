import logo from "../logo.svg"

import { AiOutlinePlus,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {BiEdit} from "react-icons/bi"
import Button from "./button";
import { useState ,useEffect} from "react";
import NavSearch from "./Navseearch";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import { Link,useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Nav(){
    const Public_ID='A567EF675679ERH5124GHIK4H2348I90A567EF675679ERH5124GHIK4H2348I90'
    const display=Public_ID.slice(0,9)
    const [activeTab,setActiveTab]=useState(true);
    const [open,setOpen]=useState(true)
    const location = useLocation();
    const[key,setKeys]=useState(display)
    const[copy,setCopied]=useState(false)
    const style={
        fontSize:"28px",
    }
    
    useEffect(() => {
        if (location.pathname === "/") {
          setActiveTab("home");
        } else if (location.pathname === "/AddPost") {
          setActiveTab("AddPost");
        } else if (location.pathname === "/RemovePost") {
          setActiveTab("RemovePost");
        } else if (location.pathname === "/EditPost") {
          setActiveTab("EditPost");
        } else if (location.pathname === "/stores") {
          setActiveTab("stores");
        } else if (location.pathname === "/LockPage") {
          setActiveTab("LockPage");
        }
      }, [location]);
  console.log(copy)

    return(
        <div className="shadow-md w-full sticky top-0 left-0 mb-10">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-blue-600">
                <span>
                  <Link to ="/">
                  <img src={logo} alt="logo"/>

                  </Link>  
                  </span>

                 </div>
                 <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
                  onClick={()=>setOpen(!open)}>
                    {open ? 
                    <AiOutlineMenu/>:<AiOutlineClose/>}
                 </div>
                 <div className={`flex text-center sm:flex flex-col  ${open ? "hidden":"block"}`}>
                   <h4 className="font-bold text-blue-500" >Public_ID:</h4>
                    <div className=" shadow-md rounded py-3 px-2 flex justify-center items-center md:shadow  md:rounded-md md:pd-3 md:px-3 md:py-3 md:flex md:items-center md:gap-2 text-center">

                    <span className={`font-bold text-gray-400 ${copy ? "text-black":""}`}>{key}</span>
                    <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard>
                    </div>
                 </div>
                 
                <ul className={` flex  justify-between items-center py-4 md:flex md:items-center top-20 ${open ? "hidden":"block"}`}>
                    <Link to="/stores">

                        <li  
                         onClick={() => setActiveTab("stores")}
                      
                        className={` ${activeTab== "stores" ? "bg-blue-500":""} shadow-md p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  `}>
                            <a href="#" className={`text-blue-600 ${activeTab== "stores" ? "text-white":""} hover:text-white duration-500`} >
                            <MdOutlineStoreMallDirectory style={style}/>
                            </a>
                        </li>
                
                    </Link>
                     <Link to="/AddPost">

                        <li  className={` ${activeTab == "AddPost" ? "bg-blue-500" :""} shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  `}>
                            <a href="#" className={`text-blue-600 ${activeTab =="AddPost" ? "text-white" :""} hover:text-white duration-500 `}>
                            <AiOutlinePlus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    <Link to="/RemovePost">

                        <li  className={`${ activeTab =="RemovePost" ? "bg-blue-500" :""} shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  `}>
                            <a href="#" className={`text-blue-600 ${ activeTab =="RemovePost" ? "text-white":""} hover:text-white duration-500 `}>
                            <AiOutlineMinus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="/EditPost">

                        <li  className={`${activeTab =="EditPost" ? "bg-blue-500":""} shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  `}>
                            <a href="#" className={`text-blue-600 ${activeTab=="EditPost" ? "text-white" :""} hover:text-white duration-500 `}>
                            <BiEdit style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="/LockPage">

                        <li  className={`${ activeTab=="LockPage" ? "bg-blue-500":""} shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]`}>
                            <a href="#" className={`${activeTab=="LockPage" ? "text-white" :""} text-blue-600 hover:text-white duration-500 `}>
                            <AiOutlineLock style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    

                </ul>
                <div className={` md:block ${open ?  "hidden" :"block"}`}>
                <NavSearch/>

                </div>
            </div>
        </div>
    )
}