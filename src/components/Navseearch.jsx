




import{AiOutlineSearch} from "react-icons/ai"


export default function NavSearch(){

    return(
        <form className="flex  bg-gray-300 items-center justify-center w-auto rounded-full px-5">
            <label className="flex gap-3">
                <AiOutlineSearch/>
            </label>
        </form>
    )
}