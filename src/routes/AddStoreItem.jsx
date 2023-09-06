import React, { useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import UploadImage from '../components/Inputs/ImageUpload';
import TextField from '../components/Inputs/TextField';
import RegionFilter from '../components/Filters/Region';
import CategoryFilter from '../components/Filters/Category';
import user from '../data/user.json';
import { useStoreItems } from '../context/storeItemsContext';
import ActionsBar from '../components/Actions/actionButtons';

export default function AddStoreItems() {
  const navigate = useNavigate();
  const { id: storeId } = useParams();
  const [images, setImages] = useState([]);
  const formRef = useRef(null);
  const { dispatch } = useStoreItems();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form Data
    const formData = new FormData(formRef.current);
    const prevImages = images.map((image) => URL.createObjectURL(image));
    const data = Object.fromEntries(formData.entries());
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      storeId,
      name: data.name,
      location: data.location,
      bed: data.bed,
      bathtub: data.bathtub,
      dimension: data.dimension,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      margin: data.margin,
      discount: data.discount,
      shipping_cost: data.shipping,
      type: data.type,
      images: prevImages,
      selected: false,
      isOnSale: false,
      user,
    };
    dispatch({ type: 'CREATE_ITEM', payload: item });
    navigate(`/store/${storeId}`);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-2 pb-20 pt-36">
      <div className="mx-auto h-full max-w-6xl overflow-hidden rounded-md bg-white">
      <ActionsBar displayList={false} displayHome />
        <form
          className="flex w-full flex-col gap-4 bg-white p-4 shadow"
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextField label="Name of Property" name="name" placeholder="Enter property Name" type="text" />
          <div className="container mx-auto mt-4 flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <div className="flex flex-col gap-2 text-sm ">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={8} className="w-full rounded bg-slate-100 p-2" />
              </div>
              <div className="flex w-full flex-col items-center md:flex-row md:space-x-3">
                <TextField label="Bedrooms" name="bed" placeholder="Enter number of Bedrooms" type="number" />
                <TextField label="Bathtub" name="bathtub" placeholder="Enter number of Bathtub" type="number" />
              </div>
              <div className="flex w-full flex-col items-center md:flex-row md:space-x-3">
                <TextField label="Dimension" name="dimension" placeholder="Enter dimension" type="number" />
                <TextField label="Price" name="price" placeholder="$" type="number" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:w-1/2">
              <TextField
                label="Location"
                name="location"
                placeholder="Enter property location"
                type="text"
                className="gap-2"
              />
              <RegionFilter />
              <CategoryFilter/>
              <div className="flex flex-col gap-2 text-sm ">
            <UploadImage name="images" onChange={setImages} />
          </div>
            </div>
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
