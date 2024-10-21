// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://assetscdn1.paytm.com/frontendcommonweb/assets/images/paytm_logo.svg" alt="Paytm" className="h-8" />
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-black">Paytm for Consumer</a>
            <a href="/" className="text-gray-600 hover:text-black">Paytm for Business</a>
            <a href="/" className="text-gray-600 hover:text-black">Investor Relations</a>
            <a href="/" className="text-gray-600 hover:text-black">Careers</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
