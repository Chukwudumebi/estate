import { useState, useContext } from "react";
import UploadImage from "../components/ImageUpload";
import CategoryFilter from "../components/Filters/Category";
import { FormContext } from "./formContext/formContext";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export default function Page1({ increase }) {
  const [progress, setProgress] = useState(50);

  const { storename, setStoreName, category, setCategory } =
    useContext(FormContext);
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full max-w-md rounded-md overflow-hidden bg-white">
        <form
          className="flex w-full flex-col gap-4 p-4 bg-white shadow"
          autoComplete="off"
        >
          <p>form1</p>

          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              name="storename"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="storename"
              type="text"
              placeholder="Store Name"
              value={storename}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Category
            </label>
            <input
              name="shipping"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="shipping"
              type="text"
              value={category}
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button
            className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
            onClick={increase}
          >
            next
          </button>
          {/* <CategoryFilter />

          <div className="grid grid-flow-row gap-2 text-sm ">
            <UploadImage name="images" onChange={setImages} />
          </div> */}
        </form>
      </div>
    </div>
  );
}
