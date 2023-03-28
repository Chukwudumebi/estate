import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import ImageUpload from '../ImageUpload';
import { useStores } from '../../context/storeContext';
import CategoryFilter from '../Filters/Category';

import { FormContext } from '../form/formContext/formContext';

export default function CreateStore() {
  const {
    storename,
    category,
    setPolicy,
    policy,
    email,
    setEmail,
    setPhone,
    agreement,
    isPhysicallyLocated,
    phone,
    fileList,
    setFileList,
    address,
    setAddress,
    setStoreName,
    setisPhysicallyLocated,
    setAgreement,
  } = useContext(FormContext);

  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { dispatch } = useStores();
  const handleSubmit = (e) => {
    e.preventDefault();
    const store = {
      id: Math.floor(Math.random() * 1000),
      storename,
      category,
      isPhysicallyLocated,
      agreement,
      email,
      phone,
      logo: fileList,
      address,
      items: [],
    };
    console.log(store);
    dispatch({ type: 'CREATE_STORE', payload: store });
    navigate('/store');
  };
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full max-w-md rounded-md overflow-hidden bg-white">
        <form
          className="flex w-full flex-col gap-4 p-4 bg-white shadow"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className="font-bold text-sky-500 ">Store Details</h2>

          <div>
            <label className="text-sm ring-0 outline-none" htmlFor="storename">
              Store Name
            </label>
            <input
              name="storename"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="price"
              type="text"
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Enter Store Name"
              required
            />
          </div>
          <CategoryFilter />
          <ImageUpload name="Store Logo" onChange={setFileList} />
          <div>
            <span className="font-semibold text-sky-500">
              Physically Located?
            </span>

            <div className="flex items-center gap-2">
              <input
                name="location"
                id="location"
                type="radio"
                onClick={() => setisPhysicallyLocated((prev) => !prev)}
              />
              Yes
              <input
                name="location"
                id="location"
                type="radio"
                onClick={() => setisPhysicallyLocated((prev) => !prev)}
              />
              No
            </div>
          </div>

          <h2 className="font-bold text-sky-500 ">
            Customer Contact Information
          </h2>

          <div>
            <label className="text-sm ring-0 outline-none" htmlFor="price">
              Email
            </label>
            <input
              name="Email"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="shipping"
              type="text"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm ring-0 outline-none" htmlFor="contact">
              Contact
            </label>
            <input
              name="contact"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="shipping"
              type="text"
              placeholder="Enter Contact"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="text-sm ring-0 outline-none"
              htmlFor="description"
            >
              Address
            </label>
            <textarea
              name="description"
              id="description"
              value={address}
              rows={2}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded bg-slate-100 p-2"
            />
          </div>
          <div className=" flex items-center gap-2">
            <input
              name="physical location"
              id="storename"
              type="checkbox"
              // value={isPhysicallyLocated}
              checked={agreement}
              onClick={() => setAgreement((prev) => !prev)}
            />
            <p className="font-semibold text-sky-600 text-sm">
              I agree not to misuse this site for illegal activities.
            </p>
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
              Create Store
            </button>
          </div>
        </form>
      </div>
      <div className="whatsss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
        <Link to="/" className=" ">
          <BsArrowLeftCircle />
        </Link>
      </div>
    </div>
  );
}
