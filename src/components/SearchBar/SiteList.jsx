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


// <div>
//           <div className="rendered-container bg-white w-5/6 m-auto text-xl font-medium pb-6 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center md:py-4 md:px-6 md:text-1xl">
//             <div className="url-one p-6 text-x-very-dark-violet md:p-0">
//               https://frontendmentor.io
//             </div>

//             <div className="desktop-flex md:flex md:items-center">
//               <div className="hr-line h-0.5 bg-x-gray w-full md:hidden"></div>
//               <div className="url-one p-6 text-x-cyan md:p-0 md:pr-6 lg:pr-12">
//                 https://rel.ink/123
//               </div>
//               <div className="px-6 md:px-0">
//                 <button className="bg-x-cyan text-white w-full py-3 text-xl font-medium hover:bg-cyan-300 rounded-md md:px-12">
//                   Copy
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-x-gray h-8"></div>
//         </div>