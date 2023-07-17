import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import ImageUpload from '../Inputs/ImageUpload';
import TextField from '../Inputs/TextField';
import RadioGroup from '../Inputs/RadioGroup';
import Checkbox from '../Inputs/Checkbox';
import { useStores } from '../../context/storeContext';
import CategoryFilter from '../Filters/Category';

export default function CreateStore() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
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
      isPhysicallyLocated: data.location,
      agreement: data.agreement,
      email: data.email,
      phone: data.phone,
      images: prevImages,
      address: data.address,
      items: [],
    };
    dispatch({ type: 'CREATE_STORE', payload: store });
    navigate(`/store/${store.id}`);
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
          <h2 className="font-bold text-sky-500 ">Property Profile</h2>
          <TextField label="Property name" name="storename" placeholder="Enter Property Name" />
          <CategoryFilter />
          <ImageUpload name="Store Logo" onChange={setImages} />
          {/* <div>
            <span className="font-semibold text-sky-500">Physically Located?</span>
            <RadioGroup
              items={[
                { value: true, label: 'Yes' },
                { label: 'No', value: false },
              ]}
              name="location"
              label="physically located?"
            />
          </div> */}

          <h2 className="font-bold text-sky-500 ">Customer Contact Information</h2>
          <TextField name="email" placeholder="Enter Email" type="email" label="Email" />
          <TextField name="phone" placeholder="Enter Contact" type="text" label="Contact" />
          <div>
            <label className="text-sm outline-none ring-0" htmlFor="description">
              Address
            </label>
            <textarea name="address" id="address" rows={2} className="w-full rounded bg-slate-100 p-2" />
          </div>

          <Checkbox name="agreement" required label="I agree not to misuse this site for illegal activities">
            <p className="text-sm font-semibold text-sky-600">
              I agree not to misuse this site for illegal activities.
            </p>
          </Checkbox>

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
              Create Profile
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
