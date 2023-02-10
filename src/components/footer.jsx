import { AiOutlinePlus,AiOutlineMinus,AiOutlineCopy,AiOutlineMenu ,AiOutlineClose,AiOutlineLock} from "react-icons/ai";


export default function Footer(){
    return(
        <div className="fixed bottom-[10px] rounded shadow flex justify-between items-center">
            <div className="flex ">
                <AiOutlineClose/>
                <AiOutlineLock/>
                <AiOutlinePlus/>
                <AiOutlineMinus/>
            </div>
            <AiOutlineCopy/>
        </div>
    )
}