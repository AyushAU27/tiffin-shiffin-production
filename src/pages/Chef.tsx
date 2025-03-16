
import React from 'react';
import { motion } from 'framer-motion';
import RegisterForm from '@/components/RegisterForm';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chef = () => {
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
            type="chef" 
            title="Register as a Home Chef" 
            subtitle="Join our network of home chefs and share your delicious meals with customers"
          />
          
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Why Cook with Tiffin Shiffin?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Earn Extra Income</h3>
                <p className="text-gray-500 text-sm">Turn your cooking passion into a profitable venture with our flexible earning opportunities.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Work From Home</h3>
                <p className="text-gray-500 text-sm">Cook from your kitchen with flexible hours that suit your lifestyle and schedule.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Grow Your Business</h3>
                <p className="text-gray-500 text-sm">Build your brand and culinary reputation with our platform's visibility and customer reach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chef;
