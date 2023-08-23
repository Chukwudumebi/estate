import { useNavigate } from 'react-router-dom';
import { useStores } from '../../context/storeContext';
import { useItems } from '../../context/ItemsContext';
import One from './One';

function List() {
  const { stores } = useStores();
  const navigate = useNavigate();
  const { items, dispatch } = useItems();
//   const selectedItems = items?.filter((item) => item.selected);

  return (

    <div>
        <div className="">
          <One
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
