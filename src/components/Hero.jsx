import React from 'react';
// import illustration from '../assets/images/illustration-working.svg';
import {ReactComponent as Illustration} from '../assets/images/illustration-working.svg';

function Hero() {
  return (
    <section className="hero-feature">
      <div className="content text-center pt-4 pb-12">
        <div className="grid-right h-94">
          <Illustration className="w-full h-full ml-6" />
        </div>
        <div className="grid-left px-1.5">
          <div className="title">
            <h1 className="text-4xl font-bold text-x-dark-blue mt-6 mb-4">
              More Than Just Shorter Links
            </h1>
          </div>
          <div className="sub-title text-x-gray-violet font-medium text-x-base">
            Build your brand's recognition and get detailed insights on how your
            links are preforming.
          </div>
          <div className="button my-6">
            <button className="py-3 px-8 bg-x-cyan text-white font-medium rounded-full text-x-base cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
