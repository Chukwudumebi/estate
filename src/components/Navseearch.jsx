




import{AiOutlineSearch} from "react-icons/ai"


export default function NavSearch(){

    return(
        <form className="flex  items-center justify-center ">
            <label className="flex">
                <input type="text" placeholder="Search Categories..." className=" focus:outline focus: outline-blue-500 bg-transparent border-2  px-3 rounded-l-lg border-gray-100  text-gray-2 focus:outline-none"/>
                <span className="rounded-r-lg bg-blue-500 py-2 px-3 border-2 border-gray-100 hover:cursor-pointer hover:bg-blue-400 ">
                <AiOutlineSearch  className="text-white text-2xl"/>

                </span>
            </label>
        </form>
    )
}