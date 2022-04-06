import React from 'react';
// import illustration from '../assets/images/illustration-working.svg';
import {ReactComponent as Illustration} from '../assets/images/illustration-working.svg';

function Hero() {
  return (
    <section className="hero-feature">
      <div className="content text-center pt-4 pb-12 md:flex md:flex-row-reverse md:content-center md:items-center">
        <div className="grid-right h-94 md:h-full md:h-96 md:ml-6 flex-1 lg:ml-0">
          <Illustration className="w-full h-full ml-6 md:ml-0 md:h-96" />
        </div>
        <div className="h-full grid-left px-1.5 md:w-full md:text-left md:flex-1 md:pl-14 lg:pl-28">
          <div className="title">
            <h1 className="text-4xl font-bold text-x-dark-blue mt-6 mb-4 md:text-5xl lg:text-6xl md:mb-2">
              More Than Just Shorter Links
            </h1>
          </div>
          <div className="sub-title text-x-gray-violet font-medium text-x-base md:font-normal lg:text-xl lg:w-5/6">
            Build your brand's recognition and get detailed insights on how your
            links are preforming.
          </div>
          <div className="button my-6">
            <button className="py-3 px-8 bg-x-cyan text-white font-medium rounded-full text-x-base cursor-pointer md:py-2 md:px-6 lg:py-3 lg:px-8">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
