import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import ImageUpload from '../components/Inputs/ImageUpload';
import { useStores } from '../context/storeContext';
import TypeSale from '../components/Filters/TypeSale';
import ActionsBar from '../components/Actions/actionButtons';

function EditStore() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { stores, dispatch } = useStores();
  const [store, setStore] = useState(() => stores.find((curr) => curr.id === id));
  const [saleType, setSaleType] = useState(store.saleType || 'total'); 
  if (!store) {
    throw new Error('store  not found');
  }
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    // prevent default form submission
    e.preventDefault();
    // create a new asset
    const previewImages = images.map((image) => URL.createObjectURL(image));
    const updatedStore = { ...store, images: previewImages, saleType };
    dispatch({ type: 'EDIT_STORE', payload: updatedStore });
    navigate(`/store/${id}`);
  };
  return (
    <div className="min-h-screen w-screen overflow-x-hidden rounded-md overflow-y-scroll p-4 pt-36 pb-20">
      <div className="m-2 mx-auto h-full max-w-6xl rounded-md bg-white">
      <ActionsBar displayList={false} displayHome />
        <form className="flex w-full flex-col gap-6 p-4" ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 text-sm">
          <div className="mx-4">
            <label htmlFor="description">Name</label>
            <input
              type="text"
              name="category"
              id="category"
              className="text-grotesk h-10 w-full rounded-md bg-slate-100 p-2 pl-[17px]"
              value={store.name}
              onChange={(e) => setStore({ ...store, name: e.target.value })}
            />
          </div>
           <TypeSale saleType={saleType} setSaleType={setSaleType} /> 
          </div>
          <div className="flex w-full flex-col md:flex-row items-center md:space-x-3">
          <div className="mx-5 flex w-full flex-grow flex-col gap-2 text-sm">
            <ImageUpload name="Property logo" onChange={setImages} images={store.images} />
          </div>
          <div className="flex w-full flex-col text-sm">
          <div className="flex flex-col items-start mr-4">
            <label htmlFor="description">Email</label>
            <input
              type="text"
              name="Email"
              id="Email"
              className="text-grotesk h-10 w-full rounded-md bg-slate-100 p-2 pl-[17px]"
              value={store.email}
              onChange={(e) => setStore({ ...store, email: e.target.value })}
            />
          </div>
          <div className="flex w-full flex-col text-sm">
          <div className="flex flex-col items-start mr-4">
            <label htmlFor="description">Contact</label>
            <input
              type="text"
              name="contact"
              id="contact"
              className="text-grotesk h-10 w-full rounded-md bg-slate-100 p-2 pl-[17px]"
              value={store.phone}
              onChange={(e) => setStore({ ...store, phone: e.target.value })}
            />
          </div>

          <div className="flex flex-col items-start mr-4">
            <label htmlFor="description">Address</label>
            <textarea
              name="description"
              id="description"
              rows={6}
              className="w-full rounded bg-slate-100 p-2"
              value={store.address}
              onChange={(e) => setStore({ ...store, address: e.target.value })}
            />
          </div>
          </div>
          </div>
          </div>
         
          <div className="flex mx-4 flex-row gap-3 py-4 text-sm">
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
              Edit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStore;
