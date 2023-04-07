import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StoresContext } from '../../context/storeContext';

export default function StoreDetails() {
  const { id } = useParams();
  const { stores } = useContext(StoresContext);
  console.log(stores);

  useEffect(() => {
    const searchedstore = stores.filter((store) => store.id === id);
    console.log(searchedstore);
  }, [id, stores]);

  return (
    <div className="h-screen w-screen p-4 pt-24 pb-20 md:pb-10">
      <div>
        <h1> store id:{id}</h1>
      </div>
    </div>
  );
}
