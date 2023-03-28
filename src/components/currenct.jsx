import { useState } from "react";
import select from "react-select";
import currencies from "../data/currencies.json"
import CurrencySelect from "./selectCurrency";

export default function Currency(){
const [selectedOption,setSelectedOption]=useState(null)
const [formatOptions,setFormatOptions]=useState({
    style:"currency",
    currency:"USD",
    currencyDisplay:"narrowSymbol"
})

const options=Object.entries(currencies).map(([key,value])=>(
    {
        value:key,
        label:key,
        countryCode:value.country_code,
        decimalDigits:value.decimal_digits,
        rounding:value.rounding,

    }
))
console.log(options)
const handleChange=(selectedOption)=>{
    if(selectedOption){
        setFormatOptions({
            style:"currency",
            CurrencyDisplay:"narrowSymbol",
            currency:selectedOption.value,
        })
    }
    
}
    return(
        <div className="w-max self-center justify-center-end">

            <CurrencySelect options={options} onChange={handleChange}/>

        </div>
    )
}