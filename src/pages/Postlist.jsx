import { PostContext } from "../components/PostContext"

import{useContext} from "react"
export default function Postlist(){
    const{Postlist}=useContext(PostContext)
    console.log(Postlist)
    return(
       <div className="flex justify-center items-center">
        {
            Postlist.map((postlist)=>(
                <div className="Descc md:flex md:justify-between md:items-center " key={postlist.id}>
                {/* <div className="object-cover h-48 w-[200px] shadow rounded">
                    <img src="/logo512.png" alt="item" />
                </div> */}
                <div>
                    <img src={postlist.image} alt="item" className=" object-cover  w-[200px] shadow rounded" />           
                </div>
                <div>
                    <p>{postlist.description}</p>
                    <p>{postlist.category}</p>
                    <p>{postlist.time}</p>
                </div>
                <div className="flex justify-evenly items-center">
                    <div className="price text-center">
                        <h2 className="font-bold text-xl text-gray-500 m-1">Price</h2>
                        <p className="font-bold text-gray-400 m-1">{postlist.price}</p>
                        <button className="text-xl px-6 rounded text-white bg-[dodgerblue]">Buy</button>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-xl text-gray-500 m-1">Time Left</h2>
                        <p className="font-bold text-gray-400 m-1">{postlist.timeleft}</p>
                        <button className="text-xl invisible px-6 rounded text-white bg-[dodgerblue]">Buy</button>
                        
                    </div>
                </div>
                </div>
            ))
        }



       </div>
    )
}