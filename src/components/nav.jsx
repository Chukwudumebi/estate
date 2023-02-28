import logo from "../logo.svg"
import {TbCurrencyNaira} from "react-icons/tb"
import { BsCurrencyBitcoin,BsCurrencyDollar,BsCurrencyPound,BsCurrencyYen ,BsCurrencyEuro} from "react-icons/bs";
import { AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {BiEdit} from "react-icons/bi"
import Button from "./button";
import { useState ,useEffect,useContext} from "react";
import NavSearch from "./Navseearch";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import { Link,useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Modal } from "flowbite-react";
import Search from "./search";
import useAxios from "../hooks/useAxios"
import { CurrencyContext } from "../context/CurrencyProvider";
import { PostContext } from "./PostContext";
import * as Dialog from '@radix-ui/react-dialog';

export default function Nav(){
  const {
    tocurrency,
    setToCurrency
  }=useContext(CurrencyContext)
  console.log(tocurrency)
  const {Postlist}=useContext(PostContext)
  const[values,setValue]=useState(null)
    const [data]=useAxios("https://restcountries.com/v3.1/all");

    const filteredData=data.filter(item=> "currencies" in item)
    const dataCountries=filteredData.map((item)=>{
        return `${item.flag} ${Object.keys(item.currencies)[0]}`
    })  
  
    
    
  
  
    return (
        < div className="shadow-md w-full bg-white flex items-center fixed top-0 left-0  z-[20]">
          
          
                  <Link to ="/">
                  <img src={logo} alt="logo" className="md:ml-[35px]"/>
                  </Link>  
          
                  <h1 className="font-bold text-blue font-[30px] ml-14 md:ml-[440px]" style={{font:"35px"}}>SQE MarketApp.</h1>
          </div>

           
    )
}

