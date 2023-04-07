import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import ImageUpload from '../ImageUpload';
import { useStores } from '../../context/storeContext';
import CategoryFilter from '../Filters/Category';

export default function CreateStore() {
  const [storename, setStoreName] = useState('');
  const [category, setCategory] = useState('');
  const [policy, setPolicy] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [fileList, setFileList] = useState([]);
  const [isPhysicallyLocated, setisPhysicallyLocated] = useState(false);
  const [agreement, setAgreement] = useState(false);
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
      id: Math.floor(Math.random() * 1000),
      storename: data.storename,
      category: data.category,
      isPhysicallyLocated: data.location,
      agreement: data.agreement,
      email: data.email,
      phone: data.phone,
      logo: prevImages,
      address: data.address,
      items: [],
    };
    dispatch({ type: 'CREATE_STORE', payload: store });
    navigate('/store');
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
          <h2 className="font-bold text-sky-500 ">Store Details</h2>

          <div>
            <label className="text-sm outline-none ring-0" htmlFor="storename">
              Store Name
            </label>
            <input
              name="storename"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="price"
              type="text"
              placeholder="Enter Store Name"
              required
            />
          </div>
          <CategoryFilter />
          <ImageUpload name="Store Logo" onChange={setImages} />
          <div>
            <span className="font-semibold text-sky-500">Physically Located?</span>

            <div className="flex items-center gap-2">
              <input name="location" id="location" type="radio" />
              Yes
              <input name="location" id="location" type="radio" />
              No
            </div>
          </div>

          <h2 className="font-bold text-sky-500 ">Customer Contact Information</h2>

          <div>
            <label className="text-sm outline-none ring-0" htmlFor="price">
              Email
            </label>
            <input
              name="email"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="email"
              type="text"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <label className="text-sm outline-none ring-0" htmlFor="contact">
              Contact
            </label>
            <input
              name="phone"
              className="h-10 w-full rounded bg-slate-100 px-2"
              id="phone"
              type="text"
              placeholder="Enter Contact"
              required
            />
          </div>
          <div>
            <label className="text-sm outline-none ring-0" htmlFor="description">
              Address
            </label>
            <textarea name="address" id="address" rows={2} className="w-full rounded bg-slate-100 p-2" />
          </div>
          <div className=" flex items-center gap-2">
            <input
              name="agreement"
              id="storename"
              type="checkbox"
              // value={isPhysicallyLocated}
              // checked={false}
              // onClick={() => setAgreement((prev) => !prev)}
            />
            <p className="text-sm font-semibold text-sky-600">
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
      <div className="whatsss flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-600 shadow-xl hover:text-black">
        <Link to="/" className=" ">
          <BsArrowLeftCircle />
        </Link>
      </div>
    </div>
  );
}
