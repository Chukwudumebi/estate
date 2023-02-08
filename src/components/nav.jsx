import logo from "../logo.svg"

import { AiOutlinePlus,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {BiEdit} from "react-icons/bi"
import Button from "./button";
import { useState } from "react";
import NavSearch from "./Navseearch";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import { Link } from "react-router-dom";

export default function Nav(){
    const [open,setOpen]=useState(true)
    const style={
        fontSize:"28px",
    }
  


    return(
        <div className="shadow-md w-full fixed top-0 left-0 mb-20">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-blue-600">
                <span>
                    <img src={logo} alt="logo"/></span>
                 </div>
                 <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
                  onClick={()=>setOpen(!open)}>
                    {open ? 
                    <AiOutlineMenu/>:<AiOutlineClose/>}
                 </div>
                 <div className={`flex text-center sm:flex flex-col  ${open ? "hidden":"block"}`}>
                    <h4 className="font-bold text-blue-500" >Public_ID:</h4>
                    <div className=" shadow-md rounded py-3 px-2 flex justify-center items-center md:shadow  md:rounded-md md:pd-3 md:px-3 md:py-3 md:flex md:items-center md:gap-2 text-center">

                    <span className="font-bold text-gray-400">839AC125001ADC</span>
                    <AiOutlineCopy className="text-2xl hover:text-blue-700 hover: cursor-pointer"/>
                    </div>
                 </div>
                 
                <ul className={` flex  justify-between items-center py-4 md:flex md:items-center top-20 ${open ? "hidden":"block"}`}>
                    <Link to="/stores">

                        <li  className=" shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  ">
                            <a href="#" className="text-blue-600 hover:text-white duration-500 ">
                            <MdOutlineStoreMallDirectory style={style}/>
                            </a>
                        </li>
                
                    </Link>
                     <Link to="/AddPost">

                        <li  className=" shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  ">
                            <a href="#" className="text-blue-600 hover:text-white duration-500 ">
                            <AiOutlinePlus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    <Link to="/RemovePost">

                        <li  className=" shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  ">
                            <a href="#" className="text-blue-600 hover:text-white duration-500 ">
                            <AiOutlineMinus style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="">

                        <li  className=" shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  ">
                            <a href="#" className="text-blue-600 hover:text-white duration-500 ">
                            <BiEdit style={style}/>
                            </a>
                        </li>
                
                    </Link>
                    
                    <Link to="">

                        <li  className=" shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]  ">
                            <a href="#" className="text-blue-600 hover:text-white duration-500 ">
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