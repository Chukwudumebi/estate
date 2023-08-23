import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import ImageUpload from '../Inputs/ImageUpload';
import TextField from '../Inputs/TextField';
import RadioGroup from '../Inputs/RadioGroup';
import Checkbox from '../Inputs/Checkbox';
import { useStores } from '../../context/storeContext';
import CategoryFilter from '../Filters/Category';
import SaleType from '../Filters/SaleType';
import TypeSale from '../Filters/TypeSale';

export default function CreateStore() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [saleType, setSaleType] = useState('total');
  const { dispatch } = useStores();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const prevImages = images.map((image) => URL.createObjectURL(image));
    const data = Object.fromEntries(formData.entries());
    const store = {
      id: Math.random().toString(36).substring(2, 9),
      name: data.storename,
      category: data.category,
      agreement: data.agreement,
      email: data.email,
      phone: data.phone,
      images: prevImages,
      address: data.address,
      items: [],
      saleType: data.SaleType,
    };
    dispatch({ type: 'CREATE_STORE', payload: store });
    navigate(`/store/${store.id}`);
  };
  return (
    <div className="h-full pt-24">
      <div className="flex flex-col gap-6 p-4">
        <div className="max-h-3xl lg:max-h-xl mx-auto h-full w-full max-w-6xl overflow-hidden rounded-lg bg-white">
          <form
            className="flex w-full flex-col gap-4 bg-white p-4 shadow"
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <h2 className="mx-4 font-bold text-sky-500 ">Property Owner</h2>
            <div className="mx-4">
              <TextField label="Owner's name" name="storename" placeholder="Enter Owner's name" className="" />
            </div>
            <TypeSale saleType={saleType} setSaleType={setSaleType} className="" />
            <div className="flex w-full flex-col md:flex-row items-center md:space-x-3">
              <div className="mx-5 flex w-full flex-grow flex-col gap-1">
                <ImageUpload name="Property Logo" className="w-full" onChange={setImages} />
              </div>
              <div className="flex w-full flex-col">
                <h2 className="font-bold text-sky-500 ">Customer Contact Information</h2>
                <div className="flex flex-col items-center mr-4">
                  <TextField name="email" placeholder="Enter Email" type="email" label="Email" className="flex-grow" />
                  <TextField
                    name="phone"
                    placeholder="Enter Contact"
                    type="text"
                    label="Contact"
                    className="flex-grow"
                  />
                  <div className="flex-grow w-full">
                    <label className="text-sm outline-none ring-0" htmlFor="description">
                      Address
                    </label>
                    <textarea name="address" id="address" rows={2} className="w-full rounded bg-slate-100 p-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mx-4">
              <Checkbox
                name="agreement"
                required
                label="I agree not to misuse this site for illegal activities"
              >
                <p className="text-sm font-semibold text-sky-600">
                  I agree not to misuse this site for illegal activities.
                </p>
              </Checkbox>
            </div>

            <div className="md:mx-4 flex flex-row gap-3 py-4 text-sm">
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
                Create Listing
              </button>
            </div>
          </form>
          <div className="whatsss flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-600 shadow-xl hover:text-black">
            <Link to="/" className=" ">
              <BsArrowLeftCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
