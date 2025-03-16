
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Truck, CreditCard, Tag, CalendarCheck } from 'lucide-react';

const Customer = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Variety of Tiffin Plans',
      description: 'Choose from a variety of subscription plans that suit your taste and dietary needs.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Enjoy punctual delivery of your meals at your preferred time slot.',
      color: 'bg-tiffin-cardamom/10 text-tiffin-cardamom'
    },
    {
      icon: Truck,
      title: 'Real-time Tracking',
      description: 'Track your meal in real-time from kitchen to doorstep.',
      color: 'bg-tiffin-saffron/10 text-tiffin-saffron'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      description: 'Pay using multiple payment methods including UPI, cards, and wallets.',
      color: 'bg-tiffin-mint/10 text-tiffin-mint'
    },
    {
      icon: Tag,
      title: 'Special Discounts',
      description: 'Enjoy exclusive discounts and offers on subscription plans.',
      color: 'bg-tiffin-ginger/10 text-tiffin-ginger'
    },
    {
      icon: CalendarCheck,
      title: 'Easy Meal Scheduling',
      description: 'Skip meals or reschedule deliveries with ease through the app.',
      color: 'bg-tiffin-cinnamon/10 text-tiffin-cinnamon'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-10 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                  For Customers
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Enjoy Daily Home-Cooked <span className="text-primary">Tiffin</span> Meals
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to Tiffin Shiffin and get delicious, healthy, home-cooked meals delivered to your doorstep every day. No more cooking hassles or unhealthy takeout options.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`${feature.color} rounded-full p-2 mt-1`}>
                        <feature.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <RegisterForm 
                  type="customer" 
                  title="Register as a Customer" 
                  subtitle="Create an account to start ordering tiffin meals" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Customer;
