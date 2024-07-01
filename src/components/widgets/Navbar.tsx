import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gray-800 shadow-md flex justify-between">
      <div className="brand text-3xl py-2">
        <a href="#top" className="text-white">
          <span className="logo">Gooseberry Technovision</span>
        </a>
      </div>

      <input type="checkbox" id="nav" className="hidden" />
      <label htmlFor="nav" className="nav__open cursor-pointer md:hidden">
        <i></i><i></i><i></i>
      </label>

      <div className="nav hidden md:block">
        <ul className="nav__items flex">
          <li className="nav__item pt-4">
            <a href="#home" className="nav__link text-white hover:text-red-500 px-4 py-2">Home</a>
          </li>
          <li className="nav__item pt-4">
            <a href="#about" className="nav__link text-white hover:text-red-500 px-4 py-2">About</a>
          </li>
          <li className="nav__item pt-4">
            <a href="#portfolio" className="nav__link text-white hover:text-red-500 px-4 py-2">Portfolio</a>
          </li>
          <li className="nav__item pt-4">
            <a href="#contact" className="nav__link text-white hover:text-red-500 px-4 py-2">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
