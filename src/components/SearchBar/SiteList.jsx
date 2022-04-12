import React from 'react'

function SiteList({ sites }) {
  return (
    <ul className="flex flex-col align-middle">
      {/** If there are sites in the sites Array, map through them.
       * If not, just return a empty <div>
       */}
      {sites ? sites.map((site) => (
        <div key={site.key}
          className="bg-white rounded-xl flex flex-col w-5/6 ml-auto mr-auto pb-4 mb-3 md:flex-row md:justify-between md:items-center md:p-4">
          <p className="url-one p-4 font-medium text-x-very-dark-violet md:p-0">{site.fullURL}</p> {/* <----- The Full URL */}
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="hr-line h-px bg-x-gray w-full md:hidden"></div>
            <p className="p-4 font-medium text-x-cyan">{site.shortenedURL}</p> {/** <--- The Shortened URl */}
            <button
              onClick={() => { navigator.clipboard.writeText(site.shortenedURL) }}
              className="before:content-['Copy'] before:focus:content-['Copied!']  bg-x-cyan focus:bg-x-dark-violet mr-auto ml-auto text-white w-5/6 py-3 text-xl font-medium hover:bg-cyan-300 rounded-md md:px-12 "></button>
          </div>
        </div>
      )) :
        <div></div>
      }
    </ul>
  )
}

export default SiteList


