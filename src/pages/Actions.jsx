
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { FaRegEdit, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import {BiEdit} from "react-icons/bi"

function Actions() {
    const [activeTab,setActiveTab]=useState(true);
    const location = useLocation();
    const [open,setOpen]=useState(true);
    const style={
        fontSize:"18px",
    
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

  return (
    <div className="sticky top-0 z-10 grid w-full items-center gap-2 border-b border-neutral-100 bg-white px-4 py-2 sm:grid-cols-auto-1fr md:px-8">
      <div className="hidden font-grotesk font-semibold uppercase sm:block lg:text-xl">sqe MarketApp.</div>
      <div className="justify-self-end">
      <ul className={` flex  justify-evenly items-center py-4 md:flex md:items-center top-20 gap-2`}>
                    <Link to="/stores">

                        <li  
                         onClick={() => setActiveTab("stores")}
                         
                         className={` ${activeTab== "stores" ? "bg-blue-500":"bg-white"} 
                         
                         group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral
                         `}>
                            <a href="#" className={`text-blue-600 ${activeTab== "stores" ? "text-white":""} hover:text-white duration-500`} >
                            <MdOutlineStoreMallDirectory style={style}/>
                            </a>
                        </li>
                
                    </Link>
                     <Link to="/AddPost" onClick={()=>setOpen(true)}>

                        <li  className={` ${activeTab == "AddPost" ? "bg-blue-500" :"bg-white"}  
                        
                        
                        
      group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral
      `}>
                            <a href="#" className={`text-blue-600 ${activeTab =="AddPost" ? "text-white" :""} hover:text-white duration-500 `}>
                            <AiOutlinePlus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    <Link to="/RemovePost" onClick={()=>setOpen(true)}>

                        <li  className={`${ activeTab =="RemovePost" ? "bg-blue-500" :"bg-white"} 
                          group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral 
                          `}>
                            <a href="#" className={`text-blue-600 ${ activeTab =="RemovePost" ? "text-white":""} hover:text-white duration-500 `}>
                            <AiOutlineMinus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="/EditPost" >

                        <li  className={`${activeTab =="EditPost" ? "bg-blue-500":"bg-white"}
                               group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral
                               `}>
                            <a href="#" className={`text-blue-600 ${activeTab=="EditPost" ? "text-white" :""} hover:text-white duration-500 `}>
                            <BiEdit style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="/LockPage" >

                        <li  className={`${ activeTab=="LockPage" ? "bg-blue-500":"bg-white"} 
                              group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral
                              `}>
                            <a href="#" className={`${activeTab=="LockPage" ? "text-white" :""} text-blue-600 hover:text-white duration-500 `}>
                            <AiOutlineLock style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    <Link to="/">
                        <li  className={`${ activeTab=="home" ? "bg-blue-500":"bg-white"}
                        
                        group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral
                        `}>
                            <a href="#" className={`${activeTab=="home" ? "text-white" :""} text-blue-600 hover:text-white duration-500 `}>
                          
                            <AiOutlineFundView style={style}/>
                            </a>
                        </li>               
                    </Link>
                </ul>
      </div>
    </div>
  );
}

export default Actions;
