import { useState } from "react"
import { Users } from "../data/users"
import{AiOutlineSearch} from "react-icons/ai"

export default function Search({setVisible}){
    const [username,setUsername]=useState("HTPO2886")
    const [search,setSearch]=useState("")
    
    console.log(search)
    const searcher=(data)=>{
        return data.filter(item=>item.username.includes(search.toUpperCase()))

    }
    const result =searcher(Users)
    console.log(result)
    return(

        <div >
            <div className="flex justify-between items-center border-b p-3">
                <span className="text-blue-500 shadow rounded p-2">{username.slice(0,1)}</span>
                <form className="flex  items-center justify-center ">
            <label className="flex">
                <input type="text" onInput={(e)=>setSearch(e.target.value)} placeholder="Search Users..." className=" focus:outline focus: outline-blue-500 bg-transparent border-2 w-[170px] rounded-l-lg border-gray-100  text-gray-2 focus:outline-none"/>
                <span className="rounded-r-lg py-2 px-3 border-2 border-gray-100 hover:cursor-pointer hover:bg-blue-400 focus:outline focus:outline-solid focus: outline-blue-400">
                <AiOutlineSearch  className="text-blue-500 text-2xl"/>

                </span>
            </label>
        </form>
            </div>
            <div className="overflow-auto h-20">
            {result.map((user)=>(

                    <div className="p-3 border-b">{user.username}</div>
                    ))}
                    </div>

            {result.length < 1 ? <h2 className="font-bold text-center text-gray-400">NO match Found</h2> :""}

            <div className="flex justify-around items-center border-t p-2 mt-[40px]">
                <button
                              onClick={()=>setVisible(false)}

                 className="text-white bg-red-600 rounded border-none shadow-md px-2 py-2 hover:transition-all duration-300 hover:bg-red-500 hover:shadow-lg">cancel</button>
                <button className=" text-white bg-blue-500 rounded border-none shadow-sm px-4 py-2 hover:transition-all duration-300 hover:shadow-lg hover:bg-blue-400">send</button>

            </div>



        </div>
    )
}