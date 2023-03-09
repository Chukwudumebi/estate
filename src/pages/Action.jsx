import { Link } from 'react-router-dom';
import { FaRegEdit, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { useItems } from '../context/ItemsContext';
import {MdOutlineStoreMallDirectory} from "react-icons/md"
import { AiOutlineFundView} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
import * as Popover from '@radix-ui/react-popover';
import NavSearch from '../components/Navseearch';
import Region from '../components/region';
import Category from '../components/category';
import Public from './public';


function Action() {
  const { assets, dispatch } = useItems();
  const selectedAssets = assets?.filter((asset) => asset.selected);
  // delete assets
  const handleDelete = () => {
    selectedAssets?.forEach((asset) => {
      dispatch({ type: 'DELETE_ASSET', payload: asset.id });
    });
  };
  const className = `${
    selectedAssets?.length > 0
      ? 'group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral-100 hover:border-sky-700 relative'
      : 'group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal relative before:absolute pointer-events-none before:aspect-square before:w-full before:left-0 before:bg-white/70 before:rounded'
  }`;
  return (
    <div className="sticky top-0 z-10 grid w-full items-center gap-2 border-b border-neutral-100 bg-white px-4 py-2 sm:grid-cols-auto-1fr md:px-8">
      <NavSearch/>
      
      <div className="justify-self-end">
        <div className="flex items-center space-x-3">


        <Popover.Root>
    <Popover.Trigger asChild>
          <button type="button" className='group grid aspect-square grid-flow-col items-center justify-center rounded border border-grey-600 px-2 py-1 font-normal shadow-sm hover:bg-sky-700 hover:text-neutral-100 hover:border-sky-700 relative' >
            <BsFilter className="text-sky-700 cursor-pointer group-hover:text-neutral-100" />
          </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} className="  bg-white rounded-md p-2 shadow-md">
        <div className="flex justify-center items-center mb-2 border-b p-2">
                          <input type="checkbox"
                        //   onChange={(e)=>setPost(e.target.checked)}
                        //    checked={post}
                           />
                           <span className="font-bold ml-2 ">New Post</span>                           
                        </div>
         
          <fieldset className="Flex justify-between border-b p-1 text-center items-center gap-2">
            <label className="Label" htmlFor="maxWidth">
              Max Price :
            </label>
            <input className=" w-14 ml-2 px-2 rounded" id="maxWidth"  defaultValue="300"  />
          </fieldset>
         <Region/>
         <Category/>
         <Public/>
        </div>
       
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
        <Link
            to="create-asset"
            className="group aspect-square rounded-md border border-neutral-300 p-2 font-normal hover:bg-sky-700 hover:text-neutral-100"
          >
            
            <MdOutlineStoreMallDirectory className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
          <Link
            to="AddItem"
            className="group aspect-square rounded-md border border-neutral-300 p-2 font-normal hover:bg-sky-700 hover:text-neutral-100"
          >
            <FaPlus className="text-sky-700 group-hover:text-neutral-100" />
          </Link>
          <Link
            // to={`edit-asset/${selectedAssets[0]?.id}`}
            className={`${
              selectedAssets?.length === 1
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
            // to={`edit-asset/${selectedAssets[0]?.id}`}
            className={`${
              selectedAssets?.length === 1
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
