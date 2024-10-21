// src/components/ServiceSection.js
import React from 'react';

const services = [
  { name: 'Prepaid/Postpaid', icon: '📱' },
  { name: 'Electricity', icon: '💡' },
  { name: 'DTH', icon: '📡' },
  { name: 'Metro', icon: '🚇' },
  { name: 'Broadband/Landline', icon: '📞' },
  { name: 'Education', icon: '🎓' },
  { name: 'Pay Loan', icon: '💸' },
  { name: 'Invest in Stocks', icon: '📈' },
  { name: 'Book a Cylinder', icon: '🛢️' },
];

const ServiceSection = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center text-white">
        {services.map((service) => (
          <div key={service.name} className="space-y-2">
            <div className="text-3xl">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
