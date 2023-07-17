// import { FaCopy } from 'react-icons/fa';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Search from './search';
// import CurrencySelect from './CurrencySelect';

function User() {
  const user = {
    id: '496d359a829f23a67f91431d1f6b1daa19424917f8676c5e1af7e107d8bc0ec1614ba9458bb11b98d1af1a3ea02eedf2796b3073df7a0bf0aa4ea1f7f31d9c8ac5f5b9cbad0b67077bc199abf7d8fdb6de9e863d585cf76458c69ddad87c707c31f775d68418a8da79c5e80952fc439f3f345dccfec668a6e4dc5d4cdd4fb2ef',
    name: 'Helen Smith',
    user_name: 'Helen',
  };
  // const shortID = `${user.id.slice(0, 6)}...${user.id.slice(-6)}`;

  return (
    <div className="relative mx-auto grid w-full max-w-3xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-3 px-4 text-center text-white">
      <h1 className="text-md self-center justify-self-start font-semibold">Welcome, {user.user_name}</h1>
      <div className="col-start-1 flex flex-col items-start self-end">
        <h2 className="text-base font-bold md:text-xl">SQE REALESTATE</h2>
      </div>
      {/* <div className="grid w-max grid-cols-1 items-center gap-2 self-center justify-self-end sm:grid-cols-2">
        <span className="w-full self-center justify-self-end text-end text-sm sm:text-base">Currency</span>
        <CurrencySelect />
      </div> */}

      {/* <div className="col-start-2 row-start-1 flex flex-row  items-center gap-1 justify-self-end"> */}
        {/* <h1 className="text-sm font-medium uppercase">{shortID}</h1> */}
        {/* <CopyToClipboard text={user.id}>
          <button
            className="grid aspect-square rounded-full border border-transparent p-1 active:border-sky-500 active:text-sky-500"
            type="button"
          >
            <FaCopy />
          </button>
        </CopyToClipboard> */}
        {/* <Search /> */}
      {/* </div> */}
    </div>
  );
}

export default User;
