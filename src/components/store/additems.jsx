import { useParams } from "react-router-dom";
import { useState,useContext ,useEffect,useRef} from "react";
import { StoresContext } from "../../context/storeContext";
import {Link,useNavigate} from "react-router-dom"
import RegionFilter from "../Filters/Region";
import CategoryFilter from "../Filters/Category"


export default function AddStoreItem(){
    const {id}=useParams()
    const [searchedStore,setSearch]=useState([])
    const [store,setStore]=useState(searchedStore)
    const{stores}=useContext(StoresContext)
    console.log(stores)
  useEffect(()=>{
     const store=stores.filter(store=>store.id===Number(id))
     setSearch(store[0]?.items)
  },[])
 
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form Data
    console.log(formRef);
    const formData = new FormData(formRef.current);
    console.log(formData);
    const prevImages = images.map((image) => URL.createObjectURL(image));
    console.log(prevImages);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const item = {
      id: Math.floor(Math.random() * 1000),
      description: data.description,
      price: data.price,
      shipping_cost: data.shipping,
      images: prevImages,
      selected: false,
    };
    setStore([...store,item])
    navigate('/store');
  };

  

    return(
    <div className="h-screen p-4 pt-24 pb-20 md:pb-10">

<div className="m-2 mx-auto h-full max-w-md rounded-md overflow-hidden bg-white">
        <form
          className="flex w-full flex-col gap-4 p-4 bg-white shadow"
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
        > 
          <div className="grid grid-flow-row gap-2 text-sm ">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={4}
              className="w-full rounded bg-slate-100 p-2"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              name="price"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="price"
              type="text"
              placeholder="$"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Shipping Cost
            </label>
            <input
              name="shipping"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="shipping"
              type="text"
              placeholder="Shipping Cost-USD"
              required
            />
          </div>
          <RegionFilter />
          <CategoryFilter />

          <div className="grid grid-flow-row gap-2 text-sm ">
            {/* <UploadImage name="images" onChange={setImages} /> */}
          </div>

          <div className="flex flex-row gap-3 py-4 text-sm">
            <Link
              to="/"
              type="button"
              className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
      <div className="whatsss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
        <Link to="/" className=" ">
          {/* <BsArrowLeftCircle /> */}
        </Link>
      </div>
        </div>
    )
}

