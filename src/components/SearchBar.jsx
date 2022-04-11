import React from 'react';

function SearchBar() {
  return (
    <div className="bg-x-gray">
      <div className="pb-10 relative h-32 flex justify-center">
        <div className="search-container bg-search-mobile bg-cover bg-x-dark-violet rounded-md absolute w-5/6  -mt-20 md:bg-search-bg md:w-10/12 lg:w-10/12 lg:mx-32 ">
          <div className="search-content w-full flex flex-col py-10 px-6 justify-center md:flex-row flex-wrap">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="w-full mr-auto p-2 text-xl rounded-md outline-x-cyan md:w-8/12 md:text-2xl md:mr-4"
            />
            <div className="error-msg md:hidden hidden italic text-red-500 mt-1">
              Please add a link
            </div>
            <button className="py-3 px-6 bg-x-cyan rounded-md font-medium text-white text-xl hover:bg-cyan-300 mt-2 md:mt-auto md:text-2xl">
              Shorten it!
            </button>
            <div className="error-msg hidden md:block md:hidden italic text-red-500 mt-1 w-full text-center">
              <p>Please add a link</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="rendered-container bg-white w-5/6 m-auto text-xl font-medium pb-6 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center md:py-4 md:px-6 md:text-1xl">
            <div className="url-one p-6 text-x-very-dark-violet md:p-0">
              https://frontendmentor.io
            </div>

            <div className="desktop-flex md:flex md:items-center">
              <div className="hr-line h-0.5 bg-x-gray w-full md:hidden"></div>
              <div className="url-one p-6 text-x-cyan md:p-0 md:pr-6 lg:pr-12">
                https://rel.ink/123
              </div>
              <div className="px-6 md:px-0">
                <button className="bg-x-cyan text-white w-full py-3 text-xl font-medium hover:bg-cyan-300 rounded-md md:px-12">
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="bg-x-gray h-8"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
