// src/components/RechargeForm.jsx
import React, { useState } from 'react';

const RechargeForm = () => {
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleRecharge = (e) => {
    e.preventDefault();
    // Add recharge API call here
    console.log("Recharge Request:", { number, amount });
  };

  return (
    <form className="bg-white shadow-lg p-6 rounded-lg" onSubmit={handleRecharge}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
        <input 
          type="text" 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
          className="w-full px-3 py-2 border rounded" 
          placeholder="Enter your mobile number" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="w-full px-3 py-2 border rounded" 
          placeholder="Enter amount" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Recharge</button>
    </form>
  );
};

export default RechargeForm;
