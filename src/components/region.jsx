export default function Region(){

    return(
        <div className="bg-white shadow text-center px-5 w-[200px] mb-3 py-5 font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
<select className="bg-white border-none focus:border-none">
  <option selected>Choose a region</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
 </div>
    )
}