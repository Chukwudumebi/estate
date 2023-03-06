import { useState } from "react"
import { Modal } from "flowbite-react";
import Search from "../components/search";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from 'react-icons/fa';
import { CurrencyContext } from "../context/CurrencyProvider";
import { useEffect,useContext } from "react";
import useAxios from "../hooks/useAxios";

export default function Headers({Public_ID}){
    const [visible,setVisible]=useState(false);  

    const [username,setUsername]=useState("HTP02886")
    const handleModalOpen = () =>{
        setVisible(true)    
      }
      const handleSet=(e)=>{
        setToCurrency(e.target.value)
     }
     const {
        tocurrency,
        setToCurrency
      }=useContext(CurrencyContext)
    const [data]=useAxios("https://restcountries.com/v3.1/all");
      
      const filteredData=data.filter(item=> "currencies" in item)
    const dataCountries=filteredData.map((item)=>{
        return `${item.flag} ${Object.keys(item.currencies)[0]}`
    })  
    return(
        <div className="relative mx-auto grid w-full max-w-3xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-3 px-4 text-center text-white">
      <h4 className="self-center justify-self-start text-sm font-bold font-[10px]">Hi,@{username}</h4>
          
      <div className="col-start-1 flex flex-col  items-start">
        <div
          className="rounded-full bg-white px-1 py-1 mt-3 text-sm text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
                       <select className=" bg-white border-none focus:border-none rounded-full">
                          <option value="Public">
                            Public </option>
                        <option value="Personal">Personal</option>                                          
                           </select>
                       </div>

        </div>

      
      <div className="w-max self-center justify-self-end">

       

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
          {/* modal */}
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
    )
}