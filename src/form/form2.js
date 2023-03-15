// import { useContext } from "react";
import UploadImage from "../components/ImageUpload";
import CategoryFilter from "../components/Filters/Category";
import { BsArrowLeftCircle } from "react-icons/bs";

import { useState, useContext } from "react";
import { FormContext } from "./formContext/formContext";
import { Link, useNavigate } from "react-router-dom";

export default function Page2({ decrease, setProgress }) {
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
    address,
    setAddress,
  } = useContext(FormContext);
  console.log(storename, category);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const store = {
      id: Math.floor(Math.random() * 1000),
      storename: storename,
      category: category,
      isPhysicallyLocated: isPhysicallyLocated,
      agreement: agreement,
      email: email,
      phone: phone,
      logo: fileList,
      address: address,
    };

    console.log(store);
    navigate("/");
  };
  return (
    <form
      className="flex w-full flex-col gap-4 p-4 bg-white "
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3 className="font-bold m-1 ">Customer Contact Information</h3>

      <div className="mb-4">
        <label className="text-sm ring-0 outline-none" htmlFor="price">
          Email
        </label>
        <input
          name="price"
          className="h-10 w-full rounded bg-slate-100 px-2"
          id="price"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="text-sm ring-0 outline-none" htmlFor="price">
          Contact
        </label>
        <input
          name="price"
          className="h-10 w-full rounded bg-slate-100 px-2"
          id="price"
          type="text"
          placeholder="contact"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="text-sm ring-0 outline-none" htmlFor="description">
          Address
        </label>
        <textarea
          name="description"
          id="description"
          value={address}
          rows={4}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded bg-slate-100 p-2"
        />
      </div>

      {/* <CategoryFilter />

          <div className="grid grid-flow-row gap-2 text-sm ">
            <UploadImage name="images" onChange={setImages} />
          </div> */}

      <div className="flex flex-row gap-3 py-4 text-sm">
        <button
          onClick={decrease}
          className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
        >
          Create Store
        </button>
      </div>
    </form>
  );
}
