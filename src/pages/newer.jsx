import { useContext } from "react";
import { PostContext } from "../components/PostContext";

export default function Newer(){
    const {Postlist}=useContext(PostContext)
    console.log(Postlist)
    return(
       <div>
        {
            Postlist.map((post)=>(
                <div key={post.id} className="border border-b py-5 bg-slate-200 ">
                    <p>{post.id}</p>
                    <p>{post.price}</p>
                    <img src={post.image} alt=""/>
                    <input type="checkbox"   />
                    <button>buy</button>
                                     <span className="font-bold text-gray-500 ml-2">Select</span>
                        
                </div>
            ))
        }
       </div>
    )
}