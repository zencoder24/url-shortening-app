import React from 'react';
import { ReactComponent as BrandLogo } from '../../assets/images/logo.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/images/icon-facebook.svg'
import { ReactComponent as PinterestIcon } from '../../assets/images/icon-pinterest.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/icon-twitter.svg'

function Footer() {

  return (
    <section className=" bg-x-very-dark-violet px-0 py-12 md:px-16 md:py-20">
      <div className="flex flex-col gap-8 items-center md:flex-row md:items-start md: justify-around">
        <BrandLogo className="fill-white w-24 md:w-24  md:mr-32" />
        <div className="text-center flex flex-col gap-4 md:text-left">
          <h2 className="text-white font-bold ">Features</h2>
          <div className='flex flex-col gap-2 md:text-left'>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Link Shortening</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Branded Links</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Analytics</p>
          </div>
        </div>
        <div className="text-center  flex flex-col gap-4 md:text-left">
          <h2 className="text-white font-bold ">Resources</h2>
          <div className='flex flex-col gap-2 md:text-left'>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Blog</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Developers</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Support</p>
          </div>
        </div>
        <div className="text-center  flex flex-col gap-4 md:text-left">
          <h2 className="text-white font-bold">Company</h2>
          <div className='flex flex-col gap-2 md:text-left'>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">About</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Our Team</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Careers</p>
            <p className="text-x-medium-gray hover:text-x-cyan cursor-pointer">Contact</p>
          </div>
        </div >
        <div className=' mt-6 flex items-center justify-center gap-6 md:mt-1'>
          <FacebookIcon className='fill-white hover:fill-x-cyan cursor-pointer' />
          <TwitterIcon className='fill-white hover:fill-x-cyan cursor-pointer' />
          <PinterestIcon className='fill-white hover:fill-x-cyan cursor-pointer' />
          <InstagramIcon className='fill-white hover:fill-x-cyan cursor-pointer' />
        </div>
      </div>

    </section>
  )
}

export default Footer;
