// import { useContext } from "react";
import UploadImage from "../components/ImageUpload";
import CategoryFilter from "../components/Filters/Category";
import { BsArrowLeftCircle } from "react-icons/bs";

import { useState, useContext } from "react";
import { FormContext } from "./formContext/formContext";
import { Link, useNavigate } from "react-router-dom";

export default function Page2({ decrease, setProgress }) {
  const { storename, category, setPolicy, policy } = useContext(FormContext);
  console.log(storename, category);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const store = {
      id: Math.floor(Math.random() * 1000),
      storename: storename,
      category: category,
      policy: policy,
    };

    console.log(store);
    navigate("/");
  };
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full max-w-md rounded-md overflow-hidden bg-white">
        <form
          className="flex w-full flex-col gap-4 p-4 bg-white shadow"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Policy
            </label>
            <input
              name="price"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="price"
              type="text"
              placeholder="Policy"
              value={policy}
              onChange={(e) => setPolicy(e.target.value)}
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
      </div>
    </div>
  );
}
