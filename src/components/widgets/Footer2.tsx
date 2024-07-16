import React from 'react';
import Social_Icons from '../common/Social_Icons';
import UpScroll from './UpScroll';

const Footer2 = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black z-10">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-5xl font-bold">
          <h2 className="md:w-full sm:w-2/3">How can we help you. get in touch</h2>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has
            been tagged
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a
              href="#"
              className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            >
              Contact US
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div></div>
            <a href="#" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              About
            </a>
            <a href="#" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Services
            </a>
            <a href="#" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Why us
            </a>
            <a href="#" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Contact
            </a>
            {/* <div className="flex flex-row space-x-8 items-center justify-between">
              <a href="#"></a>
              <a href="#"></a>
              <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw"></a>
            </div> */}
          </div>

          <hr className="border-gray-600 mb-16" />
          <Social_Icons />
          {/* <CircularMenu /> */}
          {/* <SvgAnimation /> */}
          {/* <DynamicContent /> */}

          <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Besnik Creative</p>
        </div>
      </div>
      <UpScroll />
    </div>
  );
};

export default Footer2;
