
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-subtle animation-delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Homemade <span className="text-primary">Tiffin</span> Delivered
                <br /> 
                To Your Doorstep
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Subscribe to daily homemade tiffin meals prepared by expert home chefs using fresh ingredients and authentic recipes.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="group" asChild>
                <Link to="/plans">
                  Explore Plans
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#how-it-works">
                  Learn More
                </Link>
              </Button>
            </motion.div>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                Daily Fresh Meals
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-accent/10 text-accent hover:bg-accent/20">
                Authentic Recipes
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-tiffin-saffron/10 text-tiffin-saffron hover:bg-tiffin-saffron/20">
                No Commitment
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-tiffin-cardamom/10 text-tiffin-cardamom hover:bg-tiffin-cardamom/20">
                Real-time Tracking
              </span>
            </motion.div>
          </div>
          
          {/* Image Container */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-70 animate-pulse-subtle"></div>
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Indian Tiffin Meal"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-effect rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fast Delivery</p>
                    <p className="text-xs text-gray-500">Under 30 minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 z-20 glass-effect rounded-2xl p-4 shadow-lg animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 rounded-full p-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Quality Assured</p>
                    <p className="text-xs text-gray-500">Home-cooked goodness</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
