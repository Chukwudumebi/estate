import {CopyToClipboard}from "react-copy-to-clipboard"
import { useState } from "react";
export default function EditPost(){
    const[value,setValue]=useState("hello kingsley ");
    const[copy,setCopied]=useState(false)
    
    return(
        <> <center style={{marginTop:"130px"}}>

            <input
            value={value} 
            onChange={({target:{value}})=>setValue(value)}/>
           <h1>{value}</h1>
           <CopyToClipboard text={value}
           onCopy={()=>setCopied(true)}>
            <button>copy text</button>
           </CopyToClipboard>
           {copy ? <span>text copied to clipboard</span>:null}
            

        </center>
    
        </>
    )
}