import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import TextField from '../components/Inputs/TextField';
import RadioGroup from '../components/Inputs/RadioGroup';
import ImageUpload from '../components/Inputs/ImageUpload';
import { useStoreItems } from '../context/storeItemsContext';

function EditStoreItems() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { storeId, itemId } = useParams();
  const { storeItems, dispatch } = useStoreItems();
  const [item, setItem] = useState(storeItems.find((item) => item.id === itemId));
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    // prevent default form submission
    e.preventDefault();
    // create a new asset
    const previewImages = images.map((image) => URL.createObjectURL(image));
    const updatedItem = { ...item, images: previewImages };
    dispatch({ type: 'EDIT_ITEM', payload: updatedItem });
    navigate(`/store/${storeId}`);
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

          <TextField
            label="Price"
            name="price"
            placeholder="$"
            type="number"
            initialValue={item.price}
            onChange={(val) => setItem({ ...item, price: parseFloat(val) })}
          />
          {/* <TextField
            label="Shipping Cost"
            name="shipping_cost"
            placeholder="$"
            type="number"
            initialValue={item.shipping_cost}
            onChange={(val) => setItem({ ...item, shipping_cost: parseFloat(val) })}
          /> */}

          {/* <TextField
            label="Quantity"
            name="quantity"
            placeholder="Enter Quantity"
            type="number"
            initialValue={item.quantity}
            onChange={(val) => setItem({ ...item, quantity: parseInt(val, 10) })}
          /> */}
          {/* <TextField
            label="Profit Margin"
            name="margin"
            placeholder="%"
            type="number"
            initialValue={item.margin}
            onChange={(val) => setItem({ ...item, margin: parseFloat(val) })}
          /> */}
          <TextField
            label="Discount"
            name="discount"
            placeholder="%"
            type="number"
            initialValue={item.discount}
            onChange={(val) => setItem({ ...item, discount: parseFloat(val) })}
          />
          {/* <div>
            <span className="pb-2 text-sm">New or Refurbished?</span>
            <RadioGroup
              items={[
                { value: 'new', label: 'New' },
                { label: 'Refurbished', value: 'refurbished' },
              ]}
              initialChecked={item.type}
              name="type"
              label="New or Refurbished?"
              onChange={(val) => setItem({ ...item, type: val })}
            />
          </div> */}
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

export default EditStoreItems;
