// import Select from "./select";
import Selects from "./select";


function Storecategory() {
  const options = [
    { label: 'Goods', value: 'goods' },
    { label: 'Services', value: 'services' },
    { label: 'Construction', value: 'construction' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Recreational', value: 'recreational' },
    { label: 'Automotives', value: 'automotives' },
  ];
  return (
    <div className="grid gap-2">
      <label htmlFor="categories" className="text-sm ring-0 outline-none">
        Category
      </label>
      <Selects
        placeholder="categories..."
        options={options}
        name="category"

      ></Selects>
    </div>
  );
}

export default Storecategory;
