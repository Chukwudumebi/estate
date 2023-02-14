import { PostContext } from "../components/PostContext"

import{useContext} from "react"
export default function Postlist(){
    const{Postlist ,RemovePost}=useContext(PostContext)
    console.log(Postlist)
    return(
       <div className="flex flex-col md:ml-[250px] md:w-[1000px] md:overflow-auto h-60 mt-[60px]">
        {
            Postlist.map((postlist)=>(
                <div className="Desc border-b border-gray-200 mt-4" key={postlist.id}>
                <div className="mr-6">
                    <img src={postlist.image} alt="item" className=" object-cover  w-[100px] shadow rounded" />           
                </div>
                <div className="mr-4 mt-2">
                    <p>{postlist.description}</p>
                    <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Category: </span>  {postlist.category}</p>
                    <p className="font-bold text-xl text-gray-400 m-2"><span className="font-bold text-xl"> Region: </span>  {postlist.region}</p>

                    <p className="font-bold text-gray-400"> Time Posted: {postlist.time}</p>
                    <p className="font-bold text-gray-400"> Date Posted: {postlist.date}</p>

                </div>
                <div className="flex justify-evenly items-center">
                    <div className="price text-center">
                        <h2 className="font-bold text-xl text-gray-500 m-1">Price</h2>
                        <p className="font-bold text-gray-400 m-1">{postlist.price}</p>
                        <button className="text-xl px-6 rounded text-white bg-[dodgerblue] hover:bg-blue-300">Buy</button>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-xl text-gray-500 m-1">Time Left</h2>
                        <p className="font-bold text-gray-400 m-1">{postlist.timeleft > 1 ? `${postlist.timeleft} Days`:`${postlist.timeleft} Day`}</p>
                        <button 
                        onClick={()=>{
                            RemovePost(postlist.id)

                        }} className="text-xl  px-6 rounded text-white bg-red-500 hover: bg-red-500">Remove</button>
                        
                    </div>
                </div>
                <div className="mb">
          <h1 className="hidden">hdhdhdh</h1>
        </div>

                </div>
            ))
        }



       </div>
    )
}