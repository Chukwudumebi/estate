import { useNavigate } from 'react-router-dom';
// import { FaRegEdit, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
// import { MdOutlineStoreMallDirectory } from 'react-icons/md';
// import { AiOutlineFundView } from 'react-icons/ai';
import { useStores } from '../../context/storeContext';
import { useItems } from '../../context/ItemsContext';
// import Filters from '../Filters/Index';
// import SearchBar from './SearchBar';
// import Action from './Action';
import One from './One';

function List() {
  const { stores } = useStores();
  const navigate = useNavigate();
  const { items, dispatch } = useItems();
//   const selectedItems = items?.filter((item) => item.selected);

  return (
    // <div className="sticky top-0 z-10 grid w-full grid-cols-auto-1fr items-center gap-2 border-b border-neutral-100 bg-transparent px-4 py-2">
    <div>
      {/* <SearchBar /> */}
        <div className="">
          <One
            // tooltip="Create Listing"
            isDisabled={stores.length > 0}
            onClick={() => {
              navigate('/create-store');
            }}
          >
            Create Listing
          </One>
        </div>
    </div>
  );
}

export default List;
