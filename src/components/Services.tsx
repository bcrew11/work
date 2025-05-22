'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  id: string;
  title: string;
  price: number;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services = [
    {
      id: 's600',
      title: 'S600',
      price: 44.95,
      description: 'Complete full-service car wash. Exterior: tunnel wash and tire shine.',
      icon: '/images/service-icon-1.png'
    },
    {
      id: 'pure',
      title: 'Pure',
      price: 54.95,
      description: 'Complete full-service hand wash. Exterior: soap wash, hand dry, and tire shine.',
      icon: '/images/service-icon-2.png'
    },
    {
      id: 'pure-xl',
      title: 'Pure XL',
      price: 74.95,
      description: 'Complete full-service hand wash for vehicles like Ford F250, GMC Sierra 2500, Ram 2500, Dualys and lifted vehicles.',
      icon: '/images/service-icon-3.png'
    }
  ];

  const renderServiceCard = (service: ServiceProps) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-black rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
    >
      <div className="p-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-16 h-16 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.icon})` }}
              />
            </motion.div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white text-center mb-2">{service.title}</h3>
        
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-white">${service.price}</span>
        </div>
        
        <p className="text-gray-300 text-center mb-6">{service.description}</p>
        
        <div className="text-center">
          <a 
            href="#memberships" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            View Memberships
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Service & Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our range of premium car wash services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default Services;
