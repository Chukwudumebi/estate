import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { MdOutlineStoreMallDirectory } from 'react-icons/md';
import { AiOutlineFundView } from 'react-icons/ai';
import { useStores } from '../../context/storeContext';
import { useItems } from '../../context/ItemsContext';
import Filters from '../Filters/Index';
import SearchBar from './SearchBar';
import Action from './Action';

function Actions() {
  const { stores } = useStores();
  const navigate = useNavigate();
  const { items, dispatch } = useItems();
  const selectedItems = items?.filter((item) => item.selected);

  // delete assets
  const handleDelete = () => {
    selectedItems?.forEach((item) => {
      dispatch({ type: 'DELETE_ITEM', payload: item.id });
    });
  };
  return (
    <div className="sticky top-0 z-10 grid w-full grid-cols-auto-1fr items-center gap-2 border-b border-neutral-100 bg-white px-4 py-2">
      <SearchBar />
      <div className="justify-self-end">
        <div className="flex items-center space-x-3">
          <Filters />
          <Action
            tooltip="List property"
            isDisabled={stores.length > 0}
            onClick={() => {
              navigate('/create-store');
            }}
          >
            <MdOutlineStoreMallDirectory className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            tooltip="Add Property"
            onClick={() => {
              navigate('/add-item');
            }}
          >
            <FaPlus className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            tooltip="Edit item"
            isDisabled={selectedItems?.length !== 1}
            onClick={() => {
              navigate(`edit-item/${selectedItems[0]?.id}`);
            }}
          >
            <FaRegEdit className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action tooltip="Remove Item" isDisabled={selectedItems.length < 1} onClick={handleDelete}>
            <FaMinus className="text-sky-700 group-hover:text-neutral-100" />
          </Action>

          <Action tooltip="Lock" isDisabled>
            <FaLock className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            isDisabled={stores.length !== 1}
            tooltip="View Store"
            onClick={() => {
              navigate(`store/${stores[0]?.id}`);
            }}
          >
            <AiOutlineFundView className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
        </div>
      </div>
    </div>
  );
}

export default Actions;
