import Items from '../../../components/Items/Index';
// import User from '../../../components/User';
import Action from '../../../components/actionButtons';
import SmartEstate from '../../../components/smartEstate';
import Testimonials from '../../../components/testimonials';
  
function HomePage() {
  return (
    <div>
      {/* <User /> */}
      <Action />
      <Items />
      <SmartEstate />
      <Testimonials />
    </div>
  );
}

export default HomePage;