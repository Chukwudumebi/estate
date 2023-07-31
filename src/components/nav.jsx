import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="h-15 fixed  top-0 z-50 w-screen overflow-x-hidden border-b border-transparent bg-transparent">
      <div className="flex h-full flex-row items-center justify-between px-4">
        <Link to="https://www.sqeholdings.com">
          <img src="/logo.png" alt="sqe-logo" className="object-fit h-12" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
