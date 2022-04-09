import React from 'react';

function Hero() {
  return (
    <section className="content flex flex-col md:flex-row-reverse mt-6 md:items-center md:h-x-92 md:mt-8 md:ml-32 lg:mt-10 lg:h-x-98">
      <div className="bg-hero-img bg-x-size h-x-90 bg-no-repeat ml-6 xs:bg-left sm:bg-center md:bg-left md:h-full w-full md:ml-0 md:bg-x-size-2 lg:bg-x-size-3"></div>
      <div className="flex flex-col justify-center px-5 mt-6 md:px-0 lg:w-full md:mt-0">
        <h1 className="text-5xl text-center font-bold text-x-dark-blue mb-4 lg:text-6xl md:text-left md:mb-2 xl:text-7xl">
          More than just shorter links
        </h1>
        <div className="sub-title text-center text-x-gray-violet font-medium text-x-base lg:text-2xl md:font-normal md:text-left md:w-5/6 xl:text-2xl lg:w-11/12">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </div>
        <div className="button my-6 flex justify-center md:justify-start">
          <button className="py-4 px-12 bg-x-cyan text-white font-medium rounded-full text-x-base cursor-pointer md: text-1xl md:py-3 md:px-8 hover:bg-cyan-300 lg:py-4 xl:text-2xl xl:py-5 xl:px-10">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
