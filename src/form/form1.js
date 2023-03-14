import { useState, useContext } from "react";
import UploadImage from "../components/ImageUpload";
import CategoryFilter from "../components/Filters/Category";
import { FormContext } from "./formContext/formContext";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import Storecategory from "./category";
import FormUpload from "./formImage";

export default function Page1({ increase }) {
  const [progress, setProgress] = useState(50);

  const { storename, setStoreName, category, setCategory } =
    useContext(FormContext);
  return (
    <form
      className="flex w-full flex-col gap-4 p-4 bg-white "
      autoComplete="off"
    >
      <h3 className="font-bold m-1 ">Store Details</h3>
      <div className="mb-4">
        <label className="text-sm ring-0 outline-none" htmlFor="price">
          Store Name
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

      <Storecategory category={category} />
      <FormUpload />
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
  );
}