import Search from "../components/search";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from 'react-icons/fa';
import { useState,useEffect ,useContext} from "react";
import { CurrencyContext } from "../context/CurrencyProvider";

import { Modal } from "flowbite-react";
import { AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import { Link,useLocation } from "react-router-dom";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import {BiEdit} from "react-icons/bi"
import useAxios from "../hooks/useAxios"
import Design from "./redesign";

export default function Header({Public_ID}){
    const [visible,setVisible]=useState(false);  

    const [username,setUsername]=useState("HTP02886")
    
    
    const display=Public_ID.slice(0,9)
    const [activeTab,setActiveTab]=useState(true);
    const [open,setOpen]=useState(true);
    const location = useLocation();
    const {
        tocurrency,
        setToCurrency
      }=useContext(CurrencyContext)
    const [data]=useAxios("https://restcountries.com/v3.1/all");
      
      const filteredData=data.filter(item=> "currencies" in item)
    const dataCountries=filteredData.map((item)=>{
        return `${item.flag} ${Object.keys(item.currencies)[0]}`
    })  
    const style={
        fontSize:"10px",
    
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

    const handleModalOpen = () =>{
        setVisible(true)    
      }
      const handleSet=(e)=>{
        setToCurrency(e.target.value)
     }
    return(
        <div >
          {/* header */}
        <div className=" relative mx-auto grid w-full  md:m-auto md:w-full max-w-3xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-3 px-4 text-center text-white">

        <h4 className="self-center justify-self-start text-sm font-bold font-[10px]">Hi,@{username}</h4>
        <div className="flex md:flex md:justify-between md:gap-[360px] ">

        <div className="col-start-1 flex flex-col  items-start">
        <div className="justify-self-start">
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

        <div 
          className="rounded-full bg-white px-1 py-1 text-sm mt-3  text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
          >
                   <select className=" bg-white border-none focus:border-none rounded-full" onChange={handleSet}>
                      <option value={tocurrency}>{tocurrency}</option>
                 {dataCountries.slice(0,101).map((ctr)=>(
               <option value={ctr} key={ctr}>{ctr}</option>
          ))          
          
        }                        
             </select>
             </div>
              </div>
  
        <div className="col-start-2 row-start-1 flex flex-row  items-center gap-1 justify-self-end">
          <h3 className="text-sm font-bold uppercase"> {`${Public_ID.slice(0,7)}...${Public_ID.slice(-6)}`}</h3>
          <CopyToClipboard text={Public_ID}>
            <button
              className="grid aspect-square rounded-full border border-transparent p-1 active:border-sky-500 active:text-sky-500"
              type="button"
            >
              <FaCopy />
            </button>
          </CopyToClipboard>
          <button
          type="button"
          onClick={handleModalOpen}
          className="rounded-full bg-white px-3 py-1 text-sm text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
          >
          Send
        </button>

    
        </div>
           
        <Modal
            show={visible}
            size="sm"
            popup={true}
            onClose={() => setVisible(false)}
          >
            <Modal.Body className="mt-[200px]">
              <Search  setVisible={setVisible}/>
            </Modal.Body>
          </Modal>
      </div>

      {/* third bar */}

      <Design/>
            </div>
            </div>
    )
}