import React, {useState, useEffect} from 'react';
import {getShortenedURL} from '../../api';
import SiteList from './SiteList';

function SearchBar() {
  //sites that holds all of the Site Objects and its setter
  const [sites, setSites] = useState([]);
  //The url value passed in the field and its setter
  const [inputValue, setInputValue] = useState('');

  const [isEmpty, setIsEmpty] = useState(false);

  //Function that was exported from api/index.js. This is the API call
  const shortenedURL = (submittedValue) => {
    getShortenedURL(submittedValue).then((data) => {
      console.log(data); //<-- Basically the information returned from call is logged to the console

      //Site Object is created here. This block of code essentially takes the sites array that is availble
      //and appends another object to it
      setSites((sites) => [
        ...sites,
        {
          key: data.result.code,
          fullURL: data.result.original_link,
          shortenedURL: data.result.short_link,
        },
      ]);
    });
  };

  //Checks to see if there are Site Objects stored in Local storage. If so, add them to the sites array.
  useEffect(() => {
    const sitesData = JSON.parse(localStorage.getItem('websites'));
    if (sitesData) {
      setSites(sitesData);
    }
  }, []);

  //Check to see if any sites are stored in the sites array. Essentially this code will update the local storage
  //everytime a new site object is added to the sites array
  useEffect(() => {
    if (sites.length !== 0)
      localStorage.setItem('websites', JSON.stringify(sites));
  }, [sites]);

  //Function to check if the input fields are empty before making the API call
  const submittedUrl = () => {
    //Validation Check...
    if (inputValue === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      shortenedURL(inputValue);
      setInputValue('');
    }
  };

  return (
    <section className="bg-x-gray mt-50">
      <div className="pb-10 relative h-32 flex justify-center">
        <div
          className={` ${
            isEmpty ? '-mt-28' : '-mt-20'
          } search-container bg-search-mobile bg-cover bg-x-dark-violet rounded-xl absolute w-5/6  md:-mt-16 md:bg-search-bg md:w-10/12 lg:w-10/12 lg:mx-32`}
        >
          <form
            className={`${
              isEmpty ? 'mb-8 md:mb-0 md:mt-12' : 'mb-8 md:mb-10 md:mt-10'
            } search-content w-full mt-8 flex flex-col px-6 justify-center md:flex-row`}
          >
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Shorten a link here..."
              className={`${
                isEmpty ? 'border-4 border-red-500' : 'mb-6 md:mb-0'
              } w-full  mr-auto p-2 text-xl rounded-md outline-x-cyan md:w-8/12 md:text-2xl md:mb-0 md:mr-4`}
            />
            <div
              className={`${
                isEmpty ? 'block' : 'hidden'
              } md:hidden error-msg ml-1 mb-6 italic text-red-500`}
            >
              <p>Please add a link</p>
            </div>
            <button
              onClick={submittedUrl}
              type="button"
              className="py-3 px-6 bg-x-cyan rounded-md font-medium text-white text-xl hover:bg-cyan-300  md:text-2xl"
            >
              Shorten it!
            </button>
          </form>
          <div
            className={`${
              isEmpty ? 'md:block' : 'md:hidden'
            } error-msg md:ml-16 md:mt-2 md:mb-6 hidden md:italic md:text-red-500`}
          >
            <p>Please add a link</p>
          </div>
        </div>
      </div>
      <SiteList sites={sites} />
    </section>
  );
}

export default SearchBar;
