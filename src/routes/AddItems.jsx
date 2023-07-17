import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import UploadImage from '../components/Inputs/ImageUpload';
import RegionFilter from '../components/Filters/Region';
import CategoryFilter from '../components/Filters/Category';
import { useItems } from '../context/ItemsContext';
import user from '../data/user.json';

export default function AddItems() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const formRef = useRef(null);
  const { dispatch } = useItems();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form Data
    const formData = new FormData(formRef.current);
    const prevImages = images.map((image) => URL.createObjectURL(image));
    const data = Object.fromEntries(formData.entries());
    const item = {
      id: Math.floor(Math.random() * 1000),
      description: data.description,
      price: data.price,
      shipping_cost: data.shipping,
      images: prevImages,
      selected: false,
      user,
    };
    dispatch({ type: 'CREATE_ITEM', payload: item });
    navigate('/');
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full max-w-md overflow-hidden rounded-md bg-white">
        <form
          className="flex w-full flex-col gap-4 bg-white p-4 shadow"
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="grid grid-flow-row gap-2 text-sm ">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" rows={4} className="w-full rounded bg-slate-100 p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-500" htmlFor="price">
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
          {/* <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-500" htmlFor="price">
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
          </div> */}
          <RegionFilter />
          <CategoryFilter />

          <div className="grid grid-flow-row gap-2 text-sm ">
            <UploadImage name="images" onChange={setImages} />
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
              Add Property
            </button>
          </div>
        </form>
      </div>
      <div className="whatsss flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-600 shadow-xl hover:text-black">
        <Link to="/" className=" ">
          <BsArrowLeftCircle />
        </Link>
      </div>
    </div>
  );
}
