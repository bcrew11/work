'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DetailingProps {
  // Using object type instead of empty interface
  [key: string]: never;
}

const Detailing: React.FC<DetailingProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const detailingServices = [
    {
      id: 'prep-sealant',
      name: 'Prep and Sealant',
      memberPrice: 129.90,
      guestPrice: 169.90,
      category: 'exterior'
    },
    {
      id: 'paint-sealant',
      name: 'Paint Sealant',
      memberPrice: 69.95,
      guestPrice: 99.95,
      category: 'exterior'
    },
    {
      id: 'super-clean',
      name: 'Super Clean',
      memberPrice: 69.95,
      guestPrice: 99.95,
      category: 'interior'
    },
    {
      id: 'engine-clean',
      name: 'Engine Clean',
      memberPrice: 59.95,
      guestPrice: 89.95,
      category: 'engine'
    },
    {
      id: 'rims-detail',
      name: 'Rims Detail',
      memberPrice: 39.95,
      guestPrice: 69.95,
      category: 'exterior'
    },
    {
      id: 'seats',
      name: 'Seats',
      memberPrice: 94.95,
      guestPrice: 129.95,
      category: 'interior'
    },
    {
      id: 'carpets',
      name: 'Carpets',
      memberPrice: 109.95,
      guestPrice: 144.95,
      category: 'interior'
    },
    {
      id: 'full-interior',
      name: 'Full Interior',
      memberPrice: 229.95,
      guestPrice: 269.95,
      category: 'interior'
    },
    {
      id: 'executive-detail',
      name: 'Executive Detail',
      memberPrice: 289.95,
      guestPrice: 334.95,
      category: 'premium'
    },
    {
      id: 'paint-correction',
      name: 'Paint Correction',
      memberPrice: 900,
      guestPrice: 1050,
      category: 'premium'
    },
    {
      id: 'ceramic-coating',
      name: 'Ceramic Coating',
      memberPrice: 1300,
      guestPrice: 1500,
      category: 'premium'
    }
  ];
  
  const filteredServices = activeFilter === 'all' 
    ? detailingServices 
    : detailingServices.filter(service => service.category === activeFilter);
  
  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'engine', label: 'Engine' },
    { id: 'premium', label: 'Premium' }
  ];
  
  return (
    <section id="detailing" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Detailing Menu</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium detailing services to keep your vehicle looking its best.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium border ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-transparent text-gray-300 border-gray-700 hover:bg-gray-900'
                } ${
                  filter.id === 'all' ? 'rounded-l-lg' : ''
                } ${
                  filter.id === 'premium' ? 'rounded-r-lg' : ''
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-lg font-medium">Service</th>
                <th className="py-4 px-6 text-lg font-medium text-right">Member Price</th>
                <th className="py-4 px-6 text-lg font-medium text-right">Guest Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service) => (
                <motion.tr
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-800 hover:bg-gray-900"
                >
                  <td className="py-4 px-6">{service.name}</td>
                  <td className="py-4 px-6 text-right">${service.memberPrice.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">${service.guestPrice.toFixed(2)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>If you have any questions, ask to speak with the detail manager in person or call (770)-751-7111</p>
        </div>
      </div>
    </section>
  );
};

export default Detailing;
