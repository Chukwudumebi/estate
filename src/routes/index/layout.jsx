import { Outlet } from 'react-router-dom';
import User from '../../components/User';


function IndexPage() {
  return (
    <div className="h-screen pt-24">
      <div className="flex flex-col p-4 gap-6">
        <User />
        <Outlet />
      </div>
    </div>
  );
}

export default IndexPage;

