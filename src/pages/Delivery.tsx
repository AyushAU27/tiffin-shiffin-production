
import React from 'react';
import { motion } from 'framer-motion';
import RegisterForm from '@/components/RegisterForm';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <RegisterForm 
            type="delivery" 
            title="Join Our Delivery Team" 
            subtitle="Become a delivery partner and enjoy flexible earning opportunities"
          />
          
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Benefits of Joining Tiffin Shiffin Delivery</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-500 text-sm">Work when it suits you - mornings, afternoons, or evenings. You control your schedule.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Competitive Pay</h3>
                <p className="text-gray-500 text-sm">Earn competitive delivery fees plus tips. Get paid weekly directly to your account.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Efficient Routes</h3>
                <p className="text-gray-500 text-sm">Our smart algorithm optimizes delivery routes to save your time and fuel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Delivery;
