import { Outlet } from 'react-router-dom';
import  bgImage  from '../assets/bg2.png';
import Navbar from '../components/nav';

function Root() {
  return (
    <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}>
      <Navbar />
      <main className="grid h-full w-screen  grid-cols-1 grid-rows-1 items-center justify-center gap-8 overflow-y-auto overflow-x-hidden  bg-no-repeat font-grotesk"
       >
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
