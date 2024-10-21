// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Paytm Clone</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/wallet" className="hover:underline">Wallet</a></li>
            <li><a href="/recharge" className="hover:underline">Recharge</a></li>
            <li><a href="/payments" className="hover:underline">Payments</a></li>
            <li><a href="/ecommerce" className="hover:underline">E-commerce</a></li>
          </ul>
        </nav>
        <div>
          <button className="bg-blue-800 px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
