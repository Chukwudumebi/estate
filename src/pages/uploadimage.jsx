import { useState } from "react";
import UploadImage from "./ImageUpload";
export default function Imageupload(){
   const [images,setImages]=useState([]);

   console.log(images)

    return(
        <div className="min-h-screen p-4 ">
            <div className="m-2 mx-auto h-full max-w-md rounded-md bg-white">
                <form className="flex w-full flex-col gap-4 p-4">
                    <div className="grid grid-flow-row gap-2 text-sm">
                        <label htmlFor="name">assest</label>
                        <input type="text" id="name" name="name" className="h-10 w-full rounded bg-slate-100 px-2"/>
                    </div>
                    <div className="grid grid-flow-row gap-2 text-sm ">
                        <label htmlFor="description">description</label>
                        <textarea name="description" id="description" rows={8} className="w-full rounded bg-slate-100 p-2"/>
                    </div>
                    <div className="grid grid-flow-row gap-2 text-sm ">
                        <UploadImage name="images" onChange={setImages}/>
                    </div>
                </form>
            </div>
        </div>
    )
}