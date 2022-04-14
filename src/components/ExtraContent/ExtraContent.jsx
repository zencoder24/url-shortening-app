import React from 'react';

function ExtraContent() {
  return (
    <div>
      <div className="content bg-x-gray">
        <div className="title text-center px-7 md:px-10 ">
          <h2 className="text-4xl font-semibold text-x-dark-blue py-4 pt-12 md:text-5xl">
            Advanced Statistics
          </h2>
          <p className="text-x-gray-violet text-x-base md:text-xl xl:text-2xl md:m-auto md:w-4/5 lg:w-3/5 xl:w-2/5">
            Track how your links are performing accross the web with our
            advanced statistics dashboard.
          </p>
        </div>

        <div className="cards-container lg:px-x-10 xl:px-32">
          <div className="cards pt-24 md:pt-16 py-16 px-8 lg:px-0 md:flex">
            <div className="card-square bg-white text-center relative py-14 rounded-md xl:max-w-x-1 xl:pb-14 xl:h-4/6">
              <div className="icon-wrapper bg-x-dark-violet w-20 h-20 flex justify-center items-center rounded-full absolute ml-auto mr-auto left-0 right-0 -mt-x-24 xl:ml-8">
                <div className="icon h-10 w-10 bg-brand-icon bg-contain"></div>
              </div>
              <div className="text px-8">
                <h2 className="font-bold text-2xl text-x-dark-violet pt-2 pb-4 md:text-2xl">
                  Brand Recognition
                </h2>
                <p className="text-x-gray-violet text-x-base md:text-lg">
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="h-24 w-2 bg-x-cyan m-auto md:h-2 md:w-1/5"></div>
            <div className="card-square bg-white text-center relative py-14 rounded-md xl:max-w-x-1 xl:pb-14 xl:h-4/6 xl:mt-6">
              <div className="icon-wrapper bg-x-dark-violet w-20 h-20 flex justify-center items-center rounded-full absolute ml-auto mr-auto left-0 right-0 -mt-x-24 xl:ml-8">
                <div className="icon h-10 w-10 bg-detailed-icon bg-contain"></div>
              </div>
              <div className="text px-8">
                <h2 className="font-bold text-2xl text-x-dark-violet pt-2 pb-4 md:text-2xl">
                  Detailed Records
                </h2>
                <p className="text-x-gray-violet text-x-base md:text-lg">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="h-24 w-2 bg-x-cyan m-auto md:h-2 md:w-1/5"></div>
            <div className="card-square bg-white text-center relative py-14 rounded-md xl:max-w-x-1 2xl:pb-24 xl:h-4/6 xl:mt-12">
              <div className="icon-wrapper bg-x-dark-violet w-20 h-20 flex justify-center items-center rounded-full absolute ml-auto mr-auto left-0 right-0 -mt-x-24 xl:ml-8">
                <div className="icon h-10 w-10 bg-customize-icon bg-contain"></div>
              </div>
              <div className="text px-8">
                <h2 className="font-bold text-2xl text-x-dark-violet pt-2 pb-4 md:text-2xl">
                  Fully Customizable
                </h2>
                <p className="text-x-gray-violet text-x-base md:text-lg">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="w-full bg-x-dark-violet bg-boost-mobile bg-cover bg-center text-center">
            <div className="content py-24 px-6">
              <h2 className="text-4xl font-semibold text-x-gray pb-10 lg:text-5xl">
                Boost your links today
              </h2>
              <button className="py-5 px-12 bg-x-cyan text-white  rounded-full text-xl font-semibold cursor-pointer hover:bg-cyan-300 xl:text-2xl xl:py-5 xl:px-10">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraContent;
