
import React from 'react';
import { CircleCheck, Utensils, Clock, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Choose Your Plan',
    description: 'Select a subscription plan that fits your dietary needs and budget.',
    icon: CircleCheck,
    color: 'bg-primary/10 text-primary'
  },
  {
    title: 'Customized Meals',
    description: 'Our home chefs prepare fresh meals according to your preferences.',
    icon: Utensils,
    color: 'bg-tiffin-cardamom/10 text-tiffin-cardamom'
  },
  {
    title: 'Regular Schedule',
    description: 'Your meals are prepared and packed daily at scheduled times.',
    icon: Clock,
    color: 'bg-tiffin-saffron/10 text-tiffin-saffron'
  },
  {
    title: 'Doorstep Delivery',
    description: 'Fresh meals are delivered right to your doorstep by our delivery partners.',
    icon: Truck,
    color: 'bg-tiffin-mint/10 text-tiffin-mint'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
            How <span className="text-primary">Tiffin Shiffin</span> Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
            Get fresh, home-cooked meals delivered to your doorstep in 4 simple steps
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-gray-200"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
