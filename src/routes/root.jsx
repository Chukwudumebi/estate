import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav';

function Root() {
  return (
    <div>
      <Navbar />
      <main className="grid h-full w-screen max-w-screen-2xl grid-cols-1 grid-rows-1 items-center justify-center gap-8 overflow-y-auto overflow-x-hidden bg-neutral-50 font-grotesk">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
