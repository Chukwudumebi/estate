export default function Category(){

    return(
        <div className="bg-white text-center w-[200px] px-4 py-4 mb-3 shadow font-bold text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
    
       <select id="countries" class="bg-white">
  <option selected>Choose a Category</option>
  <option value="US">Goods</option>
  <option value="CA">Services</option>
  <option value="FR">construction</option>
  <option value="DE">Electronics</option>
  <option value="DE">Recreational</option>
  <option value="DE">Automotives</option>

</select>
        </div>
    )
}