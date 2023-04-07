import { Link } from 'react-router-dom';
import * as Tooltip from '@radix-ui/react-tooltip';

import { FaRegEdit, FaPlus, FaMinus, FaLock, FaEdit } from 'react-icons/fa';
// import { useItems } from '../../context/ItemsContext';
import { RiMailAddLine } from 'react-icons/ri';
import { MdOutlineStoreMallDirectory } from 'react-icons/md';
import { AiOutlineFundView } from 'react-icons/ai';
// import Filters from '../Filters/Index';
// import SearchBar from './SearchBar';

import { useState, useContext } from 'react';
import SearchBar from '../../Actions/SearchBar';
import { useItems } from '../../../context/ItemsContext';
import { StoresContext } from '../../../context/storeContext';
import { useStoreItems } from '../../../context/storeItemContext';

import Tooltips from '../../tooltip';

function StoreAction() {
  const { stores } = useContext(StoresContext);
  console.log();
  const { StoreItems, dispatch } = useStoreItems();
  const selectedItems = StoreItems?.filter((item) => item.selected);

  // delete store item
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
      <span className=" font-semibold">{stores[0]?.storename}</span>

      <div className="justify-self-end">
        <div className="flex items-center space-x-3">
          <Tooltips text="Edit Store">
            <Link
              to={`/Edit-Store/${stores[0]?.id}`}
              className={`${
                stores?.length > 0
                  ? 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
                  : 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
              }`}
            >
              <FaEdit className="text-sky-700 group-hover:text-neutral-100" />
            </Link>
          </Tooltips>
          <Tooltips text="Add item">
            <Link
              to="add-store-item"
              className={`${
                stores?.length > 0
                  ? 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
                  : 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
              }`}
              // className="group aspect-square rounded-md border border-neutral-300 p-2 font-normal hover:bg-sky-700 hover:text-neutral-100"
            >
              <FaPlus className="text-sky-700 group-hover:text-neutral-100" />
            </Link>
          </Tooltips>
          <Tooltips text="Edit Item">
            <Link
              to={`edit-store-item/${selectedItems[0]?.id}`}
              className={`${
                selectedItems?.length === 1
                  ? 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
                  : 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
              }`}
            >
              <FaRegEdit className="text-sky-700 group-hover:text-neutral-100" />
            </Link>
          </Tooltips>
          <Tooltips text="Remove Item">
            <button type="button" className={className} onClick={handleDelete}>
              <FaMinus className="text-sky-700 group-hover:text-neutral-100" />
            </button>
          </Tooltips>

          <button type="button" className={className} onClick={handleDelete}>
            <RiMailAddLine className="text-sky-700 group-hover:text-neutral-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreAction;
