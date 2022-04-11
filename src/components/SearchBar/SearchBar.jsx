import React, { useState, useEffect } from 'react'
import { getShortenedURL } from '../../api'
import SiteList from './SiteList';


function SearchBar() {
  //sites that holds all of the Site Objects and its setter
  const [sites, setSites] = useState([]);
  //The url value passed in the field and its setter 
  const [inputValue, setInputValue] = useState("")



  //Function that was exported from api/index.js. This is the API call
  const shortenedURL = ((submittedValue) => {
    getShortenedURL(submittedValue)
      .then((data) => {
        console.log(data) //<-- Basically the information returned from call is logged to the console

        //Site Object is created here. This block of code essentially takes the sites array that is availble 
        //and appends another object to it
        setSites(sites => [...sites, {
          key: data.result.code,
          fullURL: data.result.original_link,
          shortenedURL: data.result.short_link
        }])
      })
  })
  //Checks to see if there are Site Objects stored in Local storage. If so, add them to the sites array.
  useEffect(() => {
    const sitesData = JSON.parse(localStorage.getItem("websites"))
    if (sitesData) {
      setSites(sitesData)
    }
  }, [])

  //Check to see if any sites are stored in the sites array. Essentially this code will update the local storage
  //everytime a new site object is added to the sites array
  useEffect(() => {
    if (sites.length !== 0)
      localStorage.setItem("websites", JSON.stringify(sites));
  }, [sites]);


  //Function to check if the input fields are empty before making the API call
  const submittedUrl = () => {
    //TODO:Validation Check will be put here....


    shortenedURL(inputValue)
    setInputValue("")
  }


  return (
    <div>
      {/** TODO: Style the Input and Button. The fuctionality already works.*/}
      <form>
        <input value={inputValue} className="bg-green-500" type="text" onChange={e => setInputValue(e.target.value)} />
        <button onClick={submittedUrl} type="button" className="p-4 w-20 text-white font-bold bg-x-cyan rounded-full text-sm px-5 py-2.5 text-center">
          Shorten It!
        </button>
      </form>

      {/** Component for the Lists of Sites */}
      <SiteList sites={sites} />
    </div>
  )
}

export default SearchBar