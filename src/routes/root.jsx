import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';
// import Tapbar from '../components/Tapbar/Index';
// import { CurrencyProvider } from '../contexts/CurrencyContext';
import { ItemsProvider } from '../context/ItemsContext';
import Navbar from '../components/nav';

function Root() {
  return (
    <div>
      <Navbar />
      <main className="grid h-full w-screen max-w-screen-2xl grid-cols-1 grid-rows-1 items-center justify-center gap-8 overflow-y-auto overflow-x-hidden bg-neutral-50 font-grotesk">
        <ItemsProvider>
          <Outlet />
        </ItemsProvider>
      </main>
      
    </div>
  );
}

export default Root;