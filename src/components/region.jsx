import{useState} from "react"
import useAxios from "../hooks/useAxios";
export default function Region({country,states,provinces}){
  const[state,setState]=useState([]);
  // console.log(state.trim().split("").slice(5).toString())
  const[province,setProvince]=useState([]);

  const [data]=useAxios("https://restcountries.com/v3.1/all");

  const filteredData=data.filter(item=> "currencies" in item)
  const dataCountries=filteredData.map((item)=>{
      return `${item.flag} ${Object.keys(item.currencies)[0]}`
  })  


  const handleCountry=(id)=>{
    const state=states.filter(s=>s.countryId ===id);
    setState(state)
  }
  const handleState=(id)=>{
    const province=provinces.filter(s=>s.stateId ===id);

    setProvince(province)
  }

    return(
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white shadow text-center px-4 w-[200px] mb-3 py-3 font-bold text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
<select className="bg-white border-none focus:border-none" onChange={(e)=>handleCountry(e.target.value)}>
  <option value="0">Choose a region</option>
    {/* {
      country && country !== undefined ? country.map((ctr,index)=>{
        return(
          <option key={index} value={ctr.id}>{ctr.name}</option>
        )
      } */}
        {dataCountries.slice(0,11).map((ctr)=>(
                <option value={ctr} key={ctr}>{ctr}</option>
            ))          
        }              

      {/* ):"No Region"
    } */}
</select>
</div>
 {state.length > 1 && <div className="bg-white shadow text-center px-4 w-[200px] mb-3 py-4 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
  <select className="bg-white border-none  focus:border-none" onChange={(e)=>handleState(e.target.value)}>
  {/* <option value="0">select state</option>
    {
      state && state !== undefined ? state.map((st,index)=>{
        return(
          <option key={index} value={st.id}>{st.name}</option>
        )
      }

      ):"No Region"
    } */}
</select>
</div>}
{province.length > 1 && <div className="bg-white shadow text-center px-4 w-[200px] mb-1 py-4 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
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