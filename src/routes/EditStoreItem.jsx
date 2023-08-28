import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import TextField from '../components/Inputs/TextField';
import ImageUpload from '../components/Inputs/ImageUpload';
import { useStoreItems } from '../context/storeItemsContext';
import RegionFilter from '../components/Filters/Region';
import CategoryFilter from '../components/Filters/Category';
import ActionsBar from '../components/Actions/actionButtons';

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
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-3 pb-20 pt-36">
      <div className="m-2 mx-auto h-full max-w-6xl rounded-md bg-white">
         <ActionsBar displayList={false} displayHome />
        <form className="flex w-full flex-col gap-4 p-2" ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 text-sm">
            <TextField label="Name of Property" name="name" placeholder="Enter property Name" type="text" />
            <div className="container mx-auto mt-4 flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col space-y-4 md:w-1/2">
                <div className="flex flex-col gap-2 text-sm ">
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
                <div className="flex w-full flex-col items-center md:flex-row md:space-x-3">
                  <TextField label="Bedrooms" name="bed" placeholder="Enter number of Bedrooms" type="number" />
                  <TextField label="Bathtub" name="bathtub" placeholder="Enter number of Bathtub" type="number" />
                </div>
                <div className="flex w-full flex-col items-center md:flex-row md:space-x-3">
                  <TextField label="Dimension" name="dimension" placeholder="Enter dimension" type="number" />
                  <TextField
                    label="Price"
                    name="price"
                    placeholder="$"
                    type="number"
                    initialValue={item.price}
                    onChange={(val) => setItem({ ...item, price: parseFloat(val) })}
                  />
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
              <CategoryFilter />
            </div>
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

export default EditStoreItems;
