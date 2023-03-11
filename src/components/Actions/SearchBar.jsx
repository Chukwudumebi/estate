import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
  return (
    <form className="flex items-center justify-center mr-3 ">
      <label className="sr-only">search</label>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Items..."
          className="text-grotesk h-10 w-md rounded-md bg-slate-50 p-2 pl-8 border border-neutral-400 focus:border-blue-500 focus:ring-0 focus:outline-none text-sm peer"
        />
        <AiOutlineSearch className="absolute inset-y-0 my-auto pointer-events-none mx-2 text-neutral-400 peer-focus:text-blue-500 text-lg" />
      </div>
    </form>
  );
}
