// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ServiceSection from './components/ServiceSection';
import RechargeForm from './components/RechargeForm';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RechargeForm />
      <ServiceSection />
      <div className="container mx-auto mt-10">
       
        
      </div>
    </div>
  );
};

export default App;
