import { AiOutlinePlus,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";


export default function Footer(){
    return(
        <div className="fixed bottom-3 rounded shadow-md flex justify-center items-center">
            <div className="flex justifty-between items-center">
            <div className="flex ">
                <AiOutlineClose/>
                <AiOutlineLock/>
                <AiOutlinePlus/>
                <AiOutlineMinus/>
            </div>
            <AiOutlineCopy/>
            </div>
        </div>
    )
}