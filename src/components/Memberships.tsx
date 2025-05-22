'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MembershipsProps {
  // Using object type instead of empty interface
  [key: string]: never;
}

const Memberships: React.FC<MembershipsProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('s600');
  
  const membershipTiers = {
    s600: {
      name: 'S600',
      description: 'A complete full-service car wash featuring a soft-touch tunnel wash, interior vacuum and wipedown, and professional tire shine. Ideal for everyday vehicles needing a fresh, polished look.',
      pricing: [
        { cars: '1st car', price: 60.95 },
        { cars: '2nd car', price: 50.95 },
        { cars: '3rd+ car', price: 37.95 }
      ]
    },
    pure: {
      name: 'Pure',
      description: 'Experience our signature full-service hand wash. Includes a gentle soap wash, expert hand-dry, and detailed tire shine — perfect for those who value personal attention and finish.',
      pricing: [
        { cars: '1st car', price: 79.95 },
        { cars: '2nd car', price: 66.95 },
        { cars: '3rd+ car', price: 51.95 }
      ]
    },
    pureXL: {
      name: 'Pure XL',
      description: 'Specialized full-service hand wash for large vehicles like Ford F250s, GMC Sierras, Ram 2500s, duallys, and lifted trucks. Extra space, extra care, and extra clean.',
      pricing: [
        { cars: '1st car', price: 109.95 },
        { cars: '2nd car', price: 94.95 },
        { cars: '3rd+ car', price: 74.95 }
      ]
    }
  };
  
  const activeMembership = membershipTiers[activeTab as keyof typeof membershipTiers];
  
  return (
    <section id="memberships" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Monthly Memberships Made for You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy unlimited full-service washes, skip the wait with priority access, and save on detailing services. Available for both single and multi-car households.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveTab('s600')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 's600'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                S600
              </button>
              <button
                onClick={() => setActiveTab('pure')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'pure'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Pure
              </button>
              <button
                onClick={() => setActiveTab('pureXL')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'pureXL'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Pure XL
              </button>
            </div>
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">{activeMembership.name}</h3>
                <p className="text-gray-600">{activeMembership.description}</p>
              </div>
              
              <div className="space-y-4">
                {activeMembership.pricing.map((tier, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-gray-200"
                  >
                    <span className="text-lg text-gray-800">{tier.cars}</span>
                    <span className="text-2xl font-bold text-black">${tier.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#location" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Visit Us Today
                </a>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-6 text-center text-gray-600">
            <p>Freshener available upon request. Don&apos;t forget to ask for our detail services!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
