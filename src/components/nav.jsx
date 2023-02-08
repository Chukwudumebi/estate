import logo from "../logo.svg"
import { Link } from "react-router-dom";
import { AiOutlinePlus,AiOutlineMinus,AiOutlineSearch,AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
import {BiEdit} from "react-icons/bi"
import Button from "./button";
import { useState } from "react";
import NavSearch from "./Navseearch";


export default function Nav(){
    const [open,setOpen]=useState(true)
    const style={
        fontSize:"28px",
    }
   let Links=[
    {name:<AiOutlinePlus style={style}/>,link:"/"},
    {name:<AiOutlineMinus style={style}/>,link:"/"},
    {name:<BiEdit style={style}/>,link:"/"},

   ]


    return(
        <div className="shadow-md w-full fixed top-0 left-0">
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
                 <div className={`flex sm:flex flex-col${open ? "hidden":"block"}`}>
                    <h4 className="font-bold text-blue-500" >Public ID:</h4>
                    <span className="font-bold text-gray-400">#A67777779</span>
                 </div>
                <ul className={` flex  justify-between items-center py-4 md:flex md:items-center top-20 ${open ? "hidden":"block"}`}>
                    {Links.map((link)=>(
                        <li key={link.name} className="md:ml-8 text-xl rounded border-gray-500 hover:text-4xl hover:scale-100">
                            <a href={link.link} className="text-blue-600 hover:text-blue-500 duration-500 ">{link.name}</a>
                        </li>
                    ))
                    }

                </ul>
                <div className={`${open ? "hidden" :"block"}`}>
                <NavSearch/>

                </div>
            </div>
        </div>
    )
}