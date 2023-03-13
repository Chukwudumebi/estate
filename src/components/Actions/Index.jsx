import { Link } from 'react-router-dom';
import { FaRegEdit, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { useItems } from '../../context/ItemsContext';
import { MdOutlineStoreMallDirectory } from 'react-icons/md';
import { AiOutlineFundView } from 'react-icons/ai';
import Filters from '../Filters/Index';
import SearchBar from './SearchBar';
import {useState} from "react"
function Action() {
  const { items, dispatch } = useItems();
  const selectedItems = items?.filter((item) => item.selected);
  

  // delete assets
  const handleDelete = () => {
    selectedItems?.forEach((item) => {
      dispatch({ type: 'DELETE_ITEM', payload: item.id });
    });
  };
  const className = `${
    selectedItems?.length > 0
      ? 'group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral-100 hover:border-sky-700 relative'
      : 'group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal relative before:absolute pointer-events-none before:aspect-square before:w-full before:left-0 before:bg-white/70 before:rounded'
  }`;
  return (
    <div className="sticky top-0 z-10 grid w-full items-center gap-2 border-b border-neutral-100 bg-white px-4 py-2 sm:grid-cols-auto-1fr md:px-8">
      <span className="font-semibold">SQE MARKETPLACE</span>
      <div className="justify-self-end">
        <div className="flex items-center space-x-3">
          <SearchBar />
          <Filters />
          <Link
            to="create-asset"
            className="group aspect-square rounded-md border border-neutral-300 p-2 font-normal hover:bg-sky-700 hover:text-neutral-100"
          >
            <MdOutlineStoreMallDirectory className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
          <Link
            to="add-item"
            className="group aspect-square rounded-md border border-neutral-300 p-2 font-normal hover:bg-sky-700 hover:text-neutral-100"
          >
            <FaPlus className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
          <Link
            to={`edit-item/${selectedItems[0]?.id}`}
            className={`${
              selectedItems?.length === 1
                ? 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
                : 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
            }`}
          >
            <FaRegEdit className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
          <button type="button" className={className} onClick={handleDelete}>
            <FaMinus className="text-sky-700 group-hover:text-neutral-100" />
          </button>
          <button type="button" className={className}>
            <FaLock className="text-sky-700 group-hover:text-neutral-100" />
          </button>
          <Link
            to={`edit-item/${selectedItems[0]?.id}`}
            className={`${
              selectedItems?.length === 1
                ? 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
                : 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
            }`}
          >
            <AiOutlineFundView className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Action;
