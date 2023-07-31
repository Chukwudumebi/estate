import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav';

function Root() {
  return (
    <div>
      <Navbar />
      <main className="grid h-full w-screen  grid-cols-1 grid-rows-1 items-center justify-center gap-8 overflow-y-auto overflow-x-hidden bg-slate-200 font-grotesk">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
