import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import StoreItems from './storeItems';

import { StoresContext } from '../../context/storeContext';

function Store() {
  const { stores } = useContext(StoresContext);
  return (
    <div>
      <StoreItems store={stores} />
      <div className="whatsss flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sky-600 shadow-xl hover:text-black">
        <Link to="/" className=" ">
          <BsArrowLeftCircle />
        </Link>
      </div>
    </div>
  );
}

export default Store;
