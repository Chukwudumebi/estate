import logo from "../logo.svg"
import {TbCurrencyNaira} from "react-icons/tb"
import { BsCurrencyBitcoin,BsCurrencyDollar,BsCurrencyPound,BsCurrencyYen ,BsCurrencyEuro} from "react-icons/bs";
import { AiOutlinePlus,AiOutlineFundView,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";
import {BiEdit} from "react-icons/bi"
import Button from "./button";
import { useState ,useEffect} from "react";
import NavSearch from "./Navseearch";
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import { Link,useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Modal } from "flowbite-react";
import Search from "./search";

export default function Nav(){
    
  
  //  1E25A0C7F23601892B34527CF9F0021523415F672345F001925613252F0234A7
//   F9F2921523415F010A65F23113252F02344E0C7F23601342B1E25A0C7F23642E
//   23415F672A65C7F23601892B3215234C7F23619256132524F67D982C9A001D89
  

  const Public_ID="027E5F9358C12A83F0112513252F02344E0C7F1925613252F15F672A65F23182178 "
    const display=Public_ID.slice(0,9)
    const [activeTab,setActiveTab]=useState(true);
    const [open,setOpen]=useState(false);
    const [visible,setVisible]=useState(false);
    const location = useLocation();
    const[key,setKeys]=useState(display)
    const[copy,setCopied]=useState(false)
    const [currency,setCurrency]=useState("")
    
    const style={
        fontSize:"28px",
      }
      
      const handleModalOpen = () =>{
        setVisible(true)
      }
      // const handleOpen = () =>{
      //     setOpen(true)
      //   }

    
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
        <div className="shadow-md w-full sticky top-0 left-0 mb-10 z-[20]">
          <div className="border-b bg-white">
          <span className="ml-5">
                  <Link to ="/">
                  <img src={logo} alt="logo"/>
                  </Link>  
                  </span>
          </div>
            <div className="md:flex items-center justify-between bg-white  md:px-10 px-7">
                 <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
                  onClick={()=>setOpen(!open)}>
                    {open ? 
                    <AiOutlineMenu/>:<AiOutlineClose/>}
                 </div>
                 <div className={`flex flex-col sm:flex flex-col  ${open ? "hidden":"block"}`}>
                  <h4 className="font-bold text-blue-500 text-center md:flex">Username:HTP02886</h4>
                  <div className="flex justify-center items-center ">

                   <h4 className="font-bold text-blue-500" >Public_ID:</h4>
                    <div className="  py-3 px-2 flex justify-center items-center md:pd-3 md:px-3 md:py-3 md:flex md:items-center md:gap-2 text-center">
                       <div>
                      
                      <p className={`font-bold text-sm text-gray-400 ${copy ? "text-black":""}`}>
      
                        {`${Public_ID.slice(0,5)}...${Public_ID.slice(-5)}`}
                       </p>
                    
                       </div>
                      
                    <CopyToClipboard text={Public_ID}
                    onCopy={()=>setCopied(true)}>
                  
                        
                    <AiOutlineCopy className={`text-2xl ${copy ? "text-blue-600":""} hover:text-blue-700 hover: cursor-pointer`}/>
                  
                    </CopyToClipboard>
                    </div>
                  </div>
                 </div>
                 <button onClick={handleModalOpen} className={`sm:flex ${open ? "hidden":"block"} font-bold bg-blue-500 text-white rounded-lg p-1 px-2 mt-3 md:mt-0`}>
                  send
                 </button>
                 
                 <div className={`  sm:flex ${open ?"hidden":"block"} bg-white shadow text-center px-4  mt-2  font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 `}>
                        <select className=" bg-white border-none focus:border-none" onChange={(e)=>setCurrency(e.target.value)}>
                          <option value="USD">
                            USD </option>
                            <option value="YEN">YEN</option>
                            <option value="EUR">EUR</option>
                            <option value="NGN">NGN</option>                          
                          </select>
                        </div>
                        <div className={`  sm:flex ${open ?"hidden":"block"} bg-white shadow text-center px-4  mt-2  font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 `}>
                        <select className=" bg-white border-none focus:border-none" onChange={(e)=>setCurrency(e.target.value)}>
                          <option value="public">
                            Public </option>
                            <option value="NGN">NGN</option>                      
                          </select>
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
                    <Link to="/">
                        <li  className={`${ activeTab=="home" ? "bg-blue-500":""} shadow-lg p-2 rounded md:ml-8 text-xl border-gray-500 hover:bg-[dodgerblue]`}>
                            <a href="#" className={`${activeTab=="home" ? "text-white" :""} text-blue-600 hover:text-white duration-500 `}>
                          
                            <AiOutlineFundView style={style}/>
                            </a>
                        </li>               
                    </Link>
                </ul>
               
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
        </div>
    )
}

