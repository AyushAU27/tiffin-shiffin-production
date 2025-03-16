
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedPlans from '@/components/FeaturedPlans';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ChefHat, Truck, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <FeaturedPlans />
        
        {/* Registration Cards */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-4">
                Join Tiffin Shiffin
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight mb-4">
                Be Part of Our <span className="text-primary">Growing</span> Family
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Whether you're looking for meals, want to cook, or deliver, there's a place for you.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div 
                className="glass-card p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customers</h3>
                <p className="text-gray-500 mb-6 flex-1">
                  Subscribe to tiffin plans and enjoy home-cooked meals delivered to your doorstep.
                </p>
                <Button className="w-full group" asChild>
                  <Link to="/customer">
                    Register as Customer
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-tiffin-cardamom/10 rounded-full p-3 w-fit mb-4">
                  <ChefHat className="h-6 w-6 text-tiffin-cardamom" />
                </div>
                <h3 className="text-xl font-bold mb-2">Home Chefs</h3>
                <p className="text-gray-500 mb-6 flex-1">
                  Share your culinary skills and earn by preparing tiffin meals for customers.
                </p>
                <Button className="w-full bg-tiffin-cardamom hover:bg-tiffin-cardamom/90 group" asChild>
                  <Link to="/chef">
                    Register as Chef
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-tiffin-saffron/10 rounded-full p-3 w-fit mb-4">
                  <Truck className="h-6 w-6 text-tiffin-saffron" />
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery Partners</h3>
                <p className="text-gray-500 mb-6 flex-1">
                  Join our delivery network and earn by delivering tiffin meals to customers.
                </p>
                <Button className="w-full bg-tiffin-saffron hover:bg-tiffin-saffron/90 group" asChild>
                  <Link to="/delivery">
                    Register as Delivery Partner
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
