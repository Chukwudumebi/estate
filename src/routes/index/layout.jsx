import { Outlet } from 'react-router-dom';
import User from '../../components/User';


function IndexPage() {
  return (
    <div>
      <div className="flex flex-col">
        <User />
        <Outlet />
      </div>
    </div>
  );
}

export default IndexPage;
