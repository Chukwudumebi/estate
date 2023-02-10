import { Link } from "react-router-dom"

export default function Description(){

    return(
        <div className="Description mt-4">
            <div className="  md:container md:mx-auto md:overflow-auto md:overflow  ">
                <div className="Descc md:flex md:justify-between md:items-center ">
                    {/* <div className="object-cover h-48 w-[200px] shadow rounded">
                        <img src="/logo512.png" alt="item" />
                    </div> */}
                    <div>
                        <img src="/logo512.png" alt="item" className=" object-cover  w-[200px] shadow rounded" />           
                    </div>
                    <div>
                        <h1>Description</h1>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="price text-center">
                            <h2 className="font-bold text-xl text-gray-500 m-1">Price</h2>
                            <p className="font-bold text-gray-400 m-1">$25</p>
                            <button className="text-xl px-6 rounded text-white bg-[dodgerblue]">Buy</button>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-xl text-gray-500 m-1">Time Left</h2>
                            <p className="font-bold text-gray-400 m-1">2 Days</p>
                            <button className="text-xl invisible px-6 rounded text-white bg-[dodgerblue]">Buy</button>
                            
                        </div>
                    </div>
                </div>
              
    
            </div>
        </div>
    )
}