import React from 'react';
// import illustration from '../assets/images/illustration-working.svg';
import {ReactComponent as Illustration} from '../assets/images/illustration-working.svg';

function Hero() {
  return (
      // Mixing flex and grid classes will often give you some bad consequences
      //This my favorite article on Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
      //Once you learn it, youll almost always use it
      <section className="pl-8 overflow-hidden content mt-6 pt-4 flex flex-col md:pl-16 md:flex-row-reverse md:items-center ">
          <div>
            {/** In order to get some control of the svg sizing...you have to set a min-width and max-width. Its still sizing a bit weird though. 
             * https://stackoverflow.com/questions/64502869/how-can-i-prevent-svg-elements-from-resizing-in-the-browser
             */}
            <Illustration className=" pr-64 min-w-96 min-h-72 max-w-96 max-h-72 md:pr-0 md:ml-0 md:max-h-full md:max-w-full "/>
          </div>

        <div className="mt-8 pr-8 flex flex-col justify-center md:mt-0 md:pr-0 ">
            <h1 className="text-4xl text-center font-bold text-x-dark-blue mb-4 md:text-6xl md:text-left md:mb-2">
              More than just shorter links
            </h1>
          <div className="sub-title text-center text-x-gray-violet font-medium text-x-base md:font-normal md:text-left lg:text-xl lg:w-5/6">
            Build your brand's recognition and get detailed insights on how your
            links are preforming.
          </div>
<<<<<<< HEAD
            <button className="py-3 w-44 px-8 mr-auto ml-auto mt-6 bg-x-cyan text-white font-medium rounded-full text-x-base cursor-pointer  md:py-3 md:px-6 md:ml-0 md:-mr-0 lg:py-3 lg:px-8">
              Get Started</button>
=======
          <div className="button my-6">
            <button className="py-3 px-8 bg-x-cyan text-white font-medium rounded-full text-x-base cursor-pointer md:py-2 md:px-6 lg:py-3 lg:px-8 hover:bg-cyan-300">
              Get Started
            </button>
          </div>
>>>>>>> 920b471224ee8d39e6a8c55f7aa5558d3853f0de
        </div>
      </section>
  );
}

export default Hero;
