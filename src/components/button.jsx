export default function Button(props) {
  return (
    <button className="rounded bg-indigo-600 py-2 px-6 font-[Poppins] text-white duration-500 hover:bg-indigo-500 md:ml-8">
      {props.children}
    </button>
  );
}
