import Items from '../../../components/Items/Index';
import User from '../../../components/User';
import Action from '../../../components/actionButtons';
import SmartEstate from '../../../components/smartEstate';
  
function HomePage() {
  return (
    <div>
      <User />
      <Action />
      <Items />
      <SmartEstate/>
    </div>
  );
}

export default HomePage;