import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import ImageUpload from '../components/Inputs/ImageUpload';
import { useItems } from '../context/ItemsContext';

function EditItems() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { items, dispatch } = useItems();
  const [item, setItem] = useState(() => items.find((curr) => curr.id === Number(id)));
  if (!item) {
    throw new Error('Item  not found');
  }
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    // prevent default form submission
    e.preventDefault();
    // create a new asset
    const previewImages = images.map((image) => URL.createObjectURL(image));
    const updatedItem = { ...item, images: previewImages };
    dispatch({ type: 'EDIT_ITEM', payload: updatedItem });
    navigate('/');
  };
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full max-w-md rounded-md bg-white">
        <form className="flex w-full flex-col gap-4 p-4" ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-flow-row gap-2 text-sm">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={8}
              className="w-full rounded bg-slate-100 p-2"
              value={item.description}
              onChange={(e) => setItem({ ...item, description: e.target.value })}
            />
          </div>

          <div className="relative grid grid-flow-row gap-1 text-sm">
            <label htmlFor="Amount">Amount</label>
            <div className="relative h-full">
              <input
                type="number"
                name="price"
                id="price"
                className="text-grotesk h-10 w-full rounded-md bg-slate-100 p-2 pl-[17px]"
                value={item.price}
                onChange={(e) => setItem({ ...item, price: parseFloat(e.target.value) })}
              />
              <span className="absolute top-[50%] left-2 translate-y-[-50%]">$</span>
            </div>
          </div>

          <div className="grid grid-flow-row gap-2 text-sm">
            <ImageUpload name="images" onChange={setImages} images={item.images} />
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
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItems;
