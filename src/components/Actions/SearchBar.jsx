import { AiOutlineSearch } from 'react-icons/ai';
import { useStoreItems } from '../../context/storeItemContext';

export default function SearchBar() {
  const { StoreItems } = useStoreItems();
  console.log(StoreItems);

  return (
    <form className="mr-3 flex items-center justify-center ">
      <label className="sr-only" htmlFor="search">
        search
      </label>

      <input
        type="text"
        placeholder="Search Items..."
        className="text-grotesk w-md peer h-10 rounded-l-md border border-neutral-400 bg-slate-50 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
        id="search"
      />
      <button
        type="button"
        className="grid aspect-square h-10 items-center justify-center rounded-r-md bg-sky-600 text-center text-white active:border active:border-neutral-900  active:bg-white active:text-neutral-900"
      >
        <AiOutlineSearch className="text-lg" />
      </button>
    </form>
  );
}
