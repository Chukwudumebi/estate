import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  return (
    <form className="mr-3 flex items-center justify-center ">
      <label className="sr-only" htmlFor="search">
        search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Items..."
          className="text-grotesk w-md peer h-10 rounded-md border border-neutral-400 bg-slate-50 p-2 pl-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
          id="search"
        />
        <AiOutlineSearch className="pointer-events-none absolute inset-y-0 my-auto mx-2 text-lg text-neutral-400 peer-focus:text-blue-500" />
      </div>
    </form>
  );
}
