import{useState} from "react"

export default function Region({country,states,provinces}){
  const[state,setState]=useState([]);
  const[province,setProvince]=useState([]);




  const handleCountry=(id)=>{
    const state=states.filter(s=>s.countryId ===id);
    setState(state)
  }
  const handleState=(id)=>{
    const province=provinces.filter(s=>s.stateId ===id);

    setProvince(province)
  }
console.log(state)
    return(
      <div className="flex flex-col">
        <div className="bg-white shadow text-center px-2 w-[200px] mb-3 py-2 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
<select className="bg-white border-none focus:border-none" onChange={(e)=>handleCountry(e.target.value)}>
  <option value="0">Choose a region</option>
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
 {state.length > 1 && <div className="bg-white shadow text-center px-2 w-[200px] mb-3 py-2 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
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
{province.length > 1 && <div className="bg-white shadow text-center px-2 w-[200px] mb-1 py-2 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
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