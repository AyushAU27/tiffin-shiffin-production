import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, MapPin, ChefHat, Package, Truck, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DeliveryStatusProps {
  orderNumber?: string;
}

const DeliveryStatus = ({ orderNumber = "TS12345678" }: DeliveryStatusProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 4) {
        setCurrentStep(prevStep => prevStep + 1);
      } else {
        clearInterval(interval);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentStep]);
  
  const steps = [
    {
      id: 1,
      title: 'Order Confirmed',
      time: '10:30 AM',
      icon: Check,
      color: 'bg-tiffin-turmeric text-white'
    },
    {
      id: 2,
      title: 'Preparing Your Meal',
      time: '10:45 AM',
      icon: ChefHat,
      color: 'bg-tiffin-cardamom text-white'
    },
    {
      id: 3,
      title: 'Out for Delivery',
      time: '11:15 AM',
      icon: Truck,
      color: 'bg-primary text-white'
    },
    {
      id: 4,
      title: 'Delivered',
      time: '11:40 AM',
      icon: Package,
      color: 'bg-tiffin-mint text-white'
    }
  ];
  
  return (
    <motion.div 
      className="glass-card p-6 max-w-xl w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Track Order</h3>
          <p className="text-sm text-gray-500">Order #{orderNumber}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
          <Clock className="h-4 w-4" />
          <span>Arriving on time</span>
        </div>
      </div>
      
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex mb-8 last:mb-0">
            <div className="flex flex-col items-center mr-4">
              <div className={`relative rounded-full p-2 ${currentStep >= step.id ? step.color : 'bg-gray-200'} transition-colors duration-500`}>
                <step.icon className="h-5 w-5" />
                
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-full">
                    <div 
                      className={`w-full ${currentStep > step.id ? 'bg-primary' : 'bg-gray-200'} transition-colors duration-500`}
                      style={{ height: 'calc(100% - 8px)' }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className={`font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                  {step.title}
                </h4>
                <span className="text-xs text-gray-500">{step.time}</span>
              </div>
              
              {step.id === 1 && currentStep >= step.id && (
                <p className="text-sm text-gray-500">Your order has been received and confirmed.</p>
              )}
              
              {step.id === 2 && currentStep >= step.id && (
                <p className="text-sm text-gray-500">Chef Anita is preparing your North Indian Thali meal.</p>
              )}
              
              {step.id === 3 && currentStep >= step.id && (
                <div>
                  <p className="text-sm text-gray-500 mb-3">Rahul is on the way with your meal.</p>
                  <div className="relative h-24 overflow-hidden rounded-lg">
                    <div className="h-full bg-gray-200">
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <div className="flex flex-col items-center">
                          <ChefHat className="h-8 w-8 text-gray-700 mb-1" />
                          <span className="text-xs text-gray-700 font-medium">Kitchen</span>
                        </div>
                        
                        <div className="flex-1 relative h-0.5 mx-4 bg-gray-300">
                          <div 
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6 rounded-full bg-primary flex items-center justify-center"
                            style={{ left: `${currentStep === 3 ? '40%' : '100%'}` }}
                          >
                            <Truck className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <MapPin className="h-8 w-8 text-gray-400 mb-1" />
                          <span className="text-xs text-gray-400 font-medium">Your Location</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step.id === 4 && currentStep >= step.id && (
                <div>
                  <p className="text-sm text-gray-500">Your meal has been delivered. Enjoy!</p>
                  <Button 
                    variant="outline" 
                    className="mt-3 text-sm h-8"
                    onClick={() => {}}
                  >
                    Rate your experience
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-gray-400 mt-0.5" />
          <p className="text-sm text-gray-500">
            Having trouble with your order? Contact our support team at +91 1234567890 or <a href="#" className="text-primary hover:underline">support@tiffinshiffin.com</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DeliveryStatus;
