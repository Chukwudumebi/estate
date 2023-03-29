import { useContext } from 'react';
import StoreItems from './storeItems';
import { StoresContext } from '../../context/storeContext';

function Store() {
  const { stores } = useContext(StoresContext);
  return <StoreItems store={stores} />;
}

export default Store;
