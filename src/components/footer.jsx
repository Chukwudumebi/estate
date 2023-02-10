import { AiOutlinePlus,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";


export default function Footer(){
    const style={
        fontSize:"28px",
    }
    return(
        <div className="footer shadow-lg rounded-full">
            <div className="footer1">
            <div className="flex justify-between items-center py-2">
                <AiOutlineClose style={style} className="text-blue-600 mr-4 shadow-lg hover:text-white duration-500" />
                <AiOutlinePlus style={style}  className="text-blue-600 mr-4 shadow-lg  hover:text-white duration-500"/>
                <AiOutlineMinus style={style} className="text-blue-600 mr-4 shadow-lg  hover:text-white duration-500" />
                <AiOutlineMinus style={style} className="text-blue-600 mr-4 shadow-lg hover:text-white duration-500" />

            </div>
            <a href="" className=" shadow-lg">

            <AiOutlineCopy style={style} className="text-blue-600   hover:text-white duration-500" />
            </a>
            </div>
        </div>
    )
}