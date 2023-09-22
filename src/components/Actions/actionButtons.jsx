import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import One from './One';
import { useStores } from '../../context/storeContext';
import Search from '../Search';

function Action({ displayList, displayHome, displayView, displaybuy, query, handleInputChange}) {
  const navigate = useNavigate();
  const { stores } = useStores();
  return (
    <div>
      <div>
        <section id="action-button" className="mx-auto rounded-t-lg mt-0.5 border-b border-neutral-200 bg-white max-w-6xl py-2">
          <div className="container flex flex-col  items-center justify-center sm:flex-row">
            <div className="mx-2 flex flex-col items-center sm:space-x-1 text-l text-[#696969] sm:mx-1 sm:flex-row sm:text-xs">
               {displayList && (
                 <One
                 isDisabled={stores.length > 0}
                 onClick={() => {
                   navigate('/create-store');
                 }}
               >
                <div className="mb-2 h-fit w-full flex justify-center cursor-pointer rounded-md border border-neutral-200 px-3 py-2 hover:text-sky-600 sm:mb-0 sm:w-auto sm:px-auto">
                  <p className="flex flex-row items-center ">
                  Create Listing
                  </p>
                </div>
                </One>
              )}
               {displaybuy && (
                 <One 
                 onClick={() => {
                   navigate ('/property-search')
                 }}
                 >
                <div className="mb-2 h-fit w-full flex justify-center cursor-pointer rounded-md border  border-neutral-200 px-3 py-2 hover:text-sky-600 sm:mb-0 sm:w-auto sm:px-8">
                  <p className="flex flex-row items-center">
                   
                      Buy
                   
                  </p>
                </div>
                </One>
              )}
              {displayHome && (
                  <One
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
              <div className="mb-2 h-fit w-full cursor-pointer rounded-md border border-neutral-200 px-3 py-2 pr-2 hover:text-sky-600 sm:mb-0 sm:w-auto sm:px-6">
                <p className="flex flex-row items-center">
                
                  Home
                   
                    </p>
              </div>
              </One>
              )}
              
                {displayView && (
                    <One
                    isDisabled={stores.length !== 1}
                    onClick={() => {
                      navigate(`store/${stores[0]?.id}`);
                    }}
                   >
              <div className="mb-2 h-fit w-full cursor-pointer rounded-md border border-neutral-200 px-3 py-2 pr-2 hover:text-sky-600 sm:mb-0 sm:w-auto sm:px-auto">
                <p className="flex flex-row items-center">
                
                  View Listing
                 
                    </p>
              </div>
              </One>
              )}
              {/* <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">
                  <Search query={query} handleInputChange={handleInputChange}/>
                  </p> 
              
              </div> */}
              <div className="mb-2 h-fit w-full cursor-pointer rounded-md border border-neutral-200 px-3 py-2 pr-2 hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <div className="flex flex-row items-center">
                 --
                </div>
              {/* Become a Contractor  */}
              </div>
               <div className="h-fit w-full cursor-pointer rounded-md gap-4 border border-neutral-200 px-3 py-2 sm:pr-12 hover:text-sky-600 sm:w-auto">
                <p className="flex flex-row items-center">--</p>
                {/* Search */}
              </div> 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// PropTypes validation
Action.propTypes = {
  displayList: PropTypes.bool.isRequired, 
  displayHome: PropTypes.bool.isRequired,
  displayView: PropTypes.bool.isRequired,
  displaybuy: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Action;