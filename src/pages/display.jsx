import { Link } from 'react-router-dom';
// import { useCurrency } from '../../contexts/CurrencyContext';
// import { useAssets } from '../../contexts/AssetsContext';
import * as Dialog from '@radix-ui/react-dialog';
// import { useItems } from "../context/ItemsContext";
import { useItems } from '../context/ItemsContext';
import ImageDialog from "../components/imageDialog";
import Actions from './Actions';

function Display( ){
  const {items}=useItems()
  const name="images"
  const { images, description, price } = items;
  return (
    <div className="mx-auto grid max-h-full w-full max-w-3xl grid-rows-auto-1fr overflow-y-hidden rounded-lg">
    <Actions />
    <div className="inner-scroll grid max-h-full overflow-y-auto">
      <div className="relative table h-max w-full table-auto border-collapse rounded-lg bg-white font-grotesk text-sm shadow">
        <div className="sticky top-0 table-header-group  w-full border-b-2 border-slate-100 bg-white">
          <div className="table-row font-bold text-neutral-800">
            <div className="table-cell px-2 py-3 text-left " aria-label="select" />
            <div className="table-cell px-2 py-3 text-left">Image</div>
            <div className="table-cell px-2 py-3 text-left text-neutral-800">Description</div>
            <div className="table-cell px-2 py-3 text-left text-neutral-800">Value</div>
            <div className="table-cell px-2 py-3 text-left text-neutral-800" aria-label="details" />
          </div>
        </div>

        <div className="table-row-group">
          {items.map((post,index) => (
            // <Asset key={id} id={id} />
            <div key={index}>
              <h1>{post.description}</h1>

            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Display;
