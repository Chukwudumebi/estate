import axios from "axios";

import { PostContext } from "../components/PostContext";
import { useState,useContext,useEffect } from "react";

export default function Newer(){
    const {Postlist}=useContext(PostContext)      
    const [rate,setRate]=useState(0)
  const [amount,setAmount]=useState([])
  console.log(amount)
//   const convert=amount * rate;

  useEffect(()=>{
    if(Postlist){

      Postlist.map((item)=>{
        setAmount(item.price)
      }) 
    }
    },[Postlist]);

//   const [converts,setConvert]=useState(convert)

  console.log(rate)
  console.log(amount)
//   console.log(convert)


    useEffect(()=>{
        axios("https://api.freecurrencyapi.com/v1/latest",{
               params: {
                   apikey:"wyYOvYBYFnvzXN5vqfzlvpBOuWsTQbmCezQvqwir",
                   base_currency:"USD",
                   currencies:"EUR",
               }
           }).then((response)=>{
               console.log(response.data.data["EUR"])
               setRate(response.data.data["EUR"])
           }).catch(err=>{
               console.log(err)
           })
   
          },[Postlist])
    return(
       <div>
        {
            Postlist.map((post)=>(
                <div key={post.id} className=" Desc border border-b py-5 bg-slate-200 shadow-lg rounded">
                    <p>id:{post.id}</p>
                    <p>price: {post.price}</p>
                
                    <div className="mr-6 mt-1" >
                            <img src={post.image} alt="item" className=" object-cover  w-[100px] shadow rounded mb-2" />
                        </div>
                    <input type="checkbox"/>
                    <button>buy</button>
                    <span className="font-bold text-gray-500 ml-2">Select</span>        
                </div>
            ))
        }
       </div>
    )
}