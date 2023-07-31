// import { FaCopy } from 'react-icons/fa';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Search from './search';
// import CurrencySelect from './CurrencySelect';

function User() {

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-[url('../public/bg2.png')] bg-no-repeat bg-cover bg-center max-auto"
      >
        <div className="container flex flex-col items-center justify-center space-y-12 h-full">
          <div className="text-4xl text-white">SQE Smart Real Estate</div>
          <div
            className="text-md h-fit w-max cursor-pointer rounded border border-white bg-transparent px-4 py-2
          text-white hover:border-transparent hover:bg-white hover:text-sky-600"
          >
            View Property
          </div>
        </div>
      </section>
    </div>
  );
}

export default User;