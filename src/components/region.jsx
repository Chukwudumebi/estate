import{useState} from "react"
import useAxios from "../hooks/useAxios";
export default function Region({country,states,provinces}){
  const[state,setState]=useState([]);
  // console.log(state.split(" ")[1].toLowerCase())
  const[province,setProvince]=useState([]);

  const [data]=useAxios("https://restcountries.com/v3.1/all");

  const filteredData=data.filter(item=> "currencies" in item)
  const dataCountries=filteredData.map((item)=>{
      return `${item.flag} ${Object.keys(item.currencies)[0]}`
  })  


  const handleCountry=(id)=>{
    console.log(id)
    const state=states.filter(s=>s.countryId===id);
    setState(state)
  }
  const handleState=(id)=>{
    const province=provinces.filter(s=>s.stateId ===id);

    setProvince(province)
  }

    return(
      <div className="flex flex-col justify-center items-center">
          <div
          className="rounded-full bg-white px-2 shadow-md font-bold py-2 mb-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
    
<select className="bg-white border-none border rounded-lg focus:border-none" onChange={(e)=>handleCountry(e.target.value)}>
  <option value="0">Region</option>
    {
      country && country !== undefined ? country.map((ctr,index)=>{
        return(
          <option key={index} value={ctr.id}>{ctr.name}</option>
        )
      } 
       
       ):"No Region"
    } 
</select>
</div>
 {state.length > 1 &&  <div
          className="rounded-full bg-white px-2 shadow-md font-bold py-2 mb-1 text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
            
        >
  <select className="bg-white border-none  focus:border-none" onChange={(e)=>handleState(e.target.value)}>
  <option value="0">select state</option>
    {
      state && state !== undefined ? state.map((st,index)=>{
        return(
          <option key={index} value={st.id}>{st.name}</option>
        )
      }

      ):"No Region"
    } 
</select>
</div>}
{province.length > 1 && 

<div
className="rounded-full bg-white  shadow-md font-bold  text-sm text-center text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
  
>
 <select className="bg-white border-none focus:border-none">
  <option value="0">select province</option>
    {
      province && province !== undefined ? province.map((pv,index)=>{
        return(
          <option key={index} value={pv.id}>{pv.name}</option>
        )
      }

      ):"No Province"
    }
</select>
 </div>}
 </div>
    )
}