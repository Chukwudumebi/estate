import { useState,useEffect } from "react";


export default function UploadImage({name,maxFiles=4,maxSizes=5,onChange}){

    const [previews,setPreviews]=useState([]);
    const [isDragging,setIsDragging]=useState(false);
    const [fileList,setFileList]=useState([]);
    
    console.log(fileList)

useEffect(()=>{
  if (onChange) onChange(fileList);
  const newPreview=fileList.map((file)=>URL.createObjectURL(file));
  setPreviews(newPreview);
},[fileList,onChange])
const handleImageChange=(e)=>{
    // check f maxfiles is reached
    if(e.target.files && e.target.files.length > 0){
        setFileList((prev)=>{
        // check if the file size is too big 
        const newFiles=Array.from(e.target.files || []).filter((file)=>file.type.includes("image"))
        
        return [...newFiles,...prev]
        })
    }
}
const handleDragEnter=()=>{
    setIsDragging(true)
}
const handleDragLeave=()=>{
    setIsDragging(false)
}
const handleDrop=()=>{
    setIsDragging(false)
}
    return(
        <div className="grid w-full auto-rows-fr grid-cols-2 gap-4">
            <div className={`hover:bg-sky-200/20 relative flex h-full w-full flex-col items-center justify-center rounded border-2 border-dashed p-4 hover:border-gray-600 ${isDragging ? 'border-gray-100 bg-sky-200/20 ':'border-sky-400 bg-white'}`}
             onDragEnter={handleDragEnter}
             onDragLeave={handleDragLeave}
             onDrop={handleDrop}
          >
            <div className="aspect-square w-20 bg-[url('/public/image-upload.png')] bg-cover"/>
            <p className="cursor-pointer text-center font-grotesk text-xs">
                click to upload or <br/> drag and drop
            </p>
            <input 
            type="file"
            id={name}
            name={name}
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 cursor-pointer text-xs opacity-0"
            multiple
            />
            </div>
            <div className=" grid h-40 grid-cols-2 grid-rows-2 gap-2 sm:h-44">
                {previews.slice(0,4).map((preview,index)=>(
                    <div key={preview } className="relative h-full w-full overflow-hidden rounded shadow">
                      <img src={preview} alt="hello" className="h-full w-full overflow-hidden object-cover"/>
                      {index === 3 && fileList.length > 4 &&(
                        <div className="absolute top-0 flex h-full w-full items-center justify-center bg-black/50 text-xl text-white ">
                            + {fileList.length -4  }
                        </div>
                      )}
                    </div>
                )
                )}
            </div>
        </div>          
    )
}