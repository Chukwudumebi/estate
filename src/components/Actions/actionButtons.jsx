import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import List from "./List";
import One from './One';
import { useStores } from '../../context/storeContext';

function Action({ displayList, displayHome, displayView}) {
  const navigate = useNavigate();
  const { stores } = useStores();
  return (
    <div>
      <div>
        <section id="action-button" className="max-auto bg-white py-7">
          <div className="container flex flex-col items-center justify-center sm:flex-row">
            <div className="mx-2 flex flex-col items-center text-l text-[#696969] sm:mx-5 sm:flex-row sm:text-xs">
               {displayList && (
                <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                  <p className="flex flex-row items-center">
                    <List />
                  </p>
                </div>
              )}
              {displayHome && (
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">
                  <One
                    onClick={() => {
                      navigate(`/`);
                    }}
                  >
                  Home
                    </One>
                    </p>
              </div>
              )}
                {displayView && (
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">
                  <One
                   isDisabled={stores.length !== 1}
                   onClick={() => {
                     navigate(`store/${stores[0]?.id}`);
                   }}
                  >
                  View Listing
                    </One>
                    </p>
              </div>
              )}
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">--</p> 
                {/* buy 
              </div> */}
              {/* <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">--</p>
                {/* Manage Property */}
              </div>
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <div className="flex flex-row items-center">
                 --
                </div>
              {/* Become a Contractor  */}
              </div>
               <div className="h-fit w-full cursor-pointer rounded-sm gap-4 border-none px-12 py-3 shadow-md hover:text-sky-600 sm:w-auto">
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
};

export default Action;