import { useState } from "react"


export default function Image(){
    const [files,setFiles]=useState([])

    const handleChange=(e)=>{
        setFiles(e.target.files)
    }
    return(
        <center>
            <input type="file" multiple/>
            <button>upload</button>
        </center>
    )
}