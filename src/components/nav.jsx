import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="oveflow-x-hidden fixed top-0 z-50 h-20 w-screen border-b border-b-neutral-200 bg-white shadow-sm">
      <div className="flex flex-row items-center justify-between px-4 ">
        <Link to="https://www.sqeholdings.com">
          <img src="/logo.svg" alt="sqe-logo" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
