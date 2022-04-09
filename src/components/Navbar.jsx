import React, { useState } from 'react'
import {ReactComponent as BrandLogo} from '../assets/images/logo.svg'
// import brandLogo from '../assets/images/logo.svg' <--- Importing as an Image makes the SVG non-scalable


function Navbar() {

  const [navMenuShown, setNavMenuShown] = useState(false); 

  return (
    <nav className="flex justify-between items-center pt-8 h-12 bg-white text-black relative">
      
      <div className="pl-4 md:pl-32 flex md:flex-row md:items-center">
        <div className='pr-6'>
          <BrandLogo className="w-24 h-24"/>
        </div>
        <div className="hidden md:flex md:flex-row">
          <div className='p-4 cursor-pointer text-x-gray-violet font-bold hover:text-x-very-dark-violet'>Features</div>
          <div className='p-4 cursor-pointer text-x-gray-violet font-bold hover:text-x-very-dark-violet'>Pricing</div>
          <div className='p-4 cursor-pointer text-x-gray-violet font-bold hover:text-x-very-dark-violet'>Resources</div>
        </div>
      </div>

      <div className="md:pr-32 hidden md:flex md:flex-row items-center ">
        <div className='p-4 cursor-pointer text-x-gray-violet font-bold hover:text-x-very-dark-violet'>Login</div> 
        <button type="button" className="p-4 text-white font-bold bg-x-cyan hover:bg-cyan-300 rounded-full text-sm px-5 py-2.5 text-center">
          Sign&#x2011;Up {/*<------- &#x2011; prevent line breaks used with hyphenated words  */}
        </button>
      </div>


      {/** Hamburger Icon */}
      <div className="pr-4 cursor-pointer text-x-gray md:hidden" onClick={() => setNavMenuShown(!navMenuShown)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/** Mobile Menu*/}
      <div className={`${navMenuShown? 'block':'hidden'} container text-white bg-x-dark-violet pl-6 pr-6 text-center ml-auto mr-auto left-0 right-0 w-11/12 rounded-lg absolute divide-y divide-slate-400 top-20  md:hidden`}>
          <div className='pt-8'>
            <h1 className='pb-8 cursor-pointer font-bold'>Features</h1>
            <h1 className='pb-8 cursor-pointer font-bold'>Pricing</h1>
            <h1 className='pb-8 cursor-pointer font-bold'>Resources</h1>
          </div>
          <div className='pb-8'>
            <h1 className=' pt-8 cursor-pointer pb-8 font-bold'>Login</h1>
            <button type="button" className="p-4 w-full  text-white font-bold bg-x-cyan rounded-full text-sm px-5 py-2.5 text-center">
              Sign&#x2011;Up {/*<------- &#x2011; prevent line breaks used with hyphenated words  */}
            </button>
          </div>
          
      </div>

      
    </nav>
   
  )
}

export default Navbar