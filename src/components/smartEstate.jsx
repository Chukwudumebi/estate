function SmartEstate() {
    return (
      <div>
        <section id="smart" className="max-auto">
          <div className="bg-black bg-opacity-70">
            {/* Flex container */}
            <div className="container mx-auto flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
              {/* who we are  */}
              <div className="mt-10 flex flex-col space-y-6 md:mb-10 md:w-1/2">
                <div className="max-w-md text-center text-4xl font-bold text-white md:text-left">
                  SMART REAL ESTATE CONTRACTS WITH A PUSH BUTTON
                  <p className="mt-4 max-w-sm text-center text-sm text-sky-700 md:text-left">
                    SMARTER, SECURE & FASTER
                  </p>
                </div>
                <div>
                  <img src="/bg4.png" alt="square" className="hidden-sm rounded-md" />
                </div>
              </div>

              {/* list points */}
              <div className="flex flex-col space-y-8 md:mb-10 md:w-1/2">
                {/* list items 1 */}
                <div className="flex flex-col space-y-3 md:mt-28 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Heading  */}
                  <div className="rounded-l-full bg-[#0693e3] md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-sky-800 px-4 py-2 text-white md:py-1">01</div>
                      <h3 className="text-base font-bold text-white md:mb-4 md:hidden">Selling & Renting</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 hidden text-lg font-bold text-white md:block"> Selling & Renting</h3>
                    <p className="text-sm text-slate-100">
                      Dealerless Deals is a platform that provides services for sell (through auction), rent and real
                      estate launch in the property registry using smart contracts
                    </p>
                  </div>
                </div>

                {/* list items 2 */}
                <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Heading  */}
                  <div className="rounded-l-full  bg-[#0693e3] md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-sky-800 px-4 py-2 text-white md:py-1">02</div>
                      <h3 className="text-base font-bold text-white md:mb-4 md:hidden">Smart Contracts</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 hidden text-lg font-bold text-white md:block"> Smart Contracts</h3>
                    <p className="text-sm text-slate-100">
                      100% electronic and secure property sale where fraud and paper deeds are a thing of the past.
                      Digital leases which automatically withdraw rent payments and service charges with a full audit
                      trail and no human error.
                    </p>
                  </div>
                </div>

                {/* list items 3 */}
                <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
                  {/* Heading  */}
                  <div className="rounded-l-full  bg-[#0693e3] md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-sky-800 px-4 py-2 text-white md:py-1">03</div>
                      <h3 className="text-base font-bold text-white md:mb-4 md:hidden">Secure Transfer</h3>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="mb-4 hidden text-lg font-bold text-white md:block">Secure Transfer</h3>
                    <p className="text-sm text-slate-200">
                      An autonomous accounting system where every transaction is automatically recorded and balanced
                      without fear of anyone manipulating the system. A secure electronic record for each individual and
                      corporate entity showing all their details among them their credit history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default SmartEstate;