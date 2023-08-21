import List from "./List";

function Action() {
  return (
    <div>
      <div>
        <section id="action-button" className="max-auto bg-white py-7">
          <div className="container flex flex-col items-center justify-center sm:flex-row">
            <div className="mx-2 flex flex-col items-center text-l text-[#696969] sm:mx-5 sm:flex-row sm:text-xs">
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center"> <List /></p>
              </div>
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">Buy</p>
              </div>
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <p className="flex flex-row items-center">Manage Property</p>
              </div>
              <div className="mb-2 h-fit w-full cursor-pointer rounded-sm border-none px-3 py-3 pr-2 shadow-md hover:text-sky-600 sm:mb-0 sm:w-auto sm:pr-12">
                <div className="flex flex-row items-center">
                 Become a Contractor
                </div>
              </div>
              <div className="h-fit w-full cursor-pointer rounded-sm gap-4 border-none px-12 py-3 shadow-md hover:text-sky-600 sm:w-auto">
                <p className="flex flex-row items-center">Search</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Action;