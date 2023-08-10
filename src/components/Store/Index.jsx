import { useParams } from 'react-router-dom';
import ScrollArea from '../ScrollArea';
import { useStores } from '../../context/storeContext';
import { useStoreItems } from '../../context/storeItemsContext';
import StoreAction from './Actions';
import StoreItem from './Item';

function Store() {
  const { id } = useParams();
  const { stores } = useStores();
  const { storeItems } = useStoreItems();
  const store = stores.find((store) => store.id === id);
  if (!store) {
    throw new Error('Store not found');
  }
  const items = storeItems.filter((storeItem) => storeItem.storeId === id);
  return (
    <div>
      <ScrollArea>
        <StoreAction storeId={id} />
        <div className="relative h-full w-full border-collapse font-grotesk text-sm">
          {items.map((item) => (
            <StoreItem key={item.id} item={item} storeId={id} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Store;
