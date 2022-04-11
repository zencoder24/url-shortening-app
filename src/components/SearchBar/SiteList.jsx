import React from 'react'

function SiteList({ sites }) {
  return (
    <ul>
      {/** If there are sites in the sites Array, map through them.
       * If not, just return a empty <div>
       */}
      {sites ? sites.map((site) => (
        <div key={site.key} className="bg-white flex content-between ">
          <p>{site.fullURL}</p> {/* <----- The Full URL */}
          <div>
            <p className="text-x-cyan">{site.shortenedURL}</p> {/** <--- The Shortened URl */}
            <button onClick={() => { navigator.clipboard.writeText(site.shortened) }} className=" bg-x-cyan rounded w-16 text-white">Copied</button>
          </div>
        </div>
      )) :
        <div></div>
      }
    </ul>
  )
}

export default SiteList