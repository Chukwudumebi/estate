import { Outlet } from 'react-router-dom';
import User from '../../components/User';
import ActionsBar from '../../components/Actions/actionButtons';

function IndexPage() {
  return (
    <div className="h-screen pt-24 ">
      <div className="flex flex-col relative">
        <div
          className="fixed top-30  left-0 right-0 z-50  flex justify-center" 
          style={{ zIndex: 1000 }} 
        >
          
          <div className="max-w-6xl w-full"> 
            <User />
            <ActionsBar displayList displayView displaybuy  />
          </div>
        </div>
        <div className="p-1 mt-36">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
