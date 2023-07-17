import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaPlus, FaMinus, FaEdit } from 'react-icons/fa';
import { TbHome } from 'react-icons/tb';
import { RiMailAddLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useStores } from '../../context/storeContext';
import { useStoreItems } from '../../context/storeItemsContext';
import Action from '../Actions/Action';

function StoreAction({ storeId }) {
  const navigate = useNavigate();
  const { stores } = useStores();
  const { storeItems, dispatch } = useStoreItems();
  const store = stores?.find((store) => store.id === storeId);
  const selectedItems = storeItems.filter((item) => item.selected);

  // delete store item
  const handleDelete = () => {
    selectedItems?.forEach((item) => {
      dispatch({ type: 'DELETE_ITEM', payload: item.id });
    });
  };
  return (
    <div className="sticky top-0 z-10 grid h-fit w-full grid-cols-auto-1fr items-center gap-2 border-b border-neutral-100 bg-white p-2">
      <div className="grid grid-cols-auto-1fr items-center gap-2">
        <div className="aspect-square w-10 overflow-hidden">
          <img src={store.images[0]} alt="" className="aspect-square h-10 overflow-hidden rounded object-cover" />
        </div>

        <span className=" font-semibold">{store.name}</span>
      </div>

      <div className="justify-self-end">
        <div className="flex items-center space-x-3">
          <Action
            tooltip="Edit Store"
            onClick={() => {
              navigate(`/edit-store/${store.id}`);
            }}
          >
            <FaEdit className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            tooltip="Add Property"
            onClick={() => {
              navigate(`/store/${store.id}/add-item`);
            }}
          >
            <FaPlus className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            tooltip="Edit Item"
            isDisabled={selectedItems.length !== 1}
            onClick={() => {
              navigate(`/store/${store.id}/edit-item/${selectedItems[0]?.id}`);
            }}
          >
            <FaRegEdit className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action tooltip="Remove properties" isDisabled={selectedItems.length < 1} onClick={handleDelete}>
            <FaMinus className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action tooltip="Add to Mailing List" isDisabled>
            <RiMailAddLine className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
          <Action
            tooltip="Home"
            onClick={() => {
              navigate(`/`);
            }}
          >
            <TbHome className="text-sky-700 group-hover:text-neutral-100" />
          </Action>
        </div>
      </div>
    </div>
  );
}

StoreAction.propTypes = {
  storeId: PropTypes.string.isRequired,
};

export default StoreAction;
