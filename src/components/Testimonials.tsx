
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Working Professional',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
    quote: 'Tiffin Shiffin has been a game-changer for me. As a busy professional, I no longer have to worry about cooking after a long day. The meals are delicious and remind me of home!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Kapoor',
    role: 'Student',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Being a student away from home, I missed my mom\'s cooking. Tiffin Shiffin delivers exactly that - homemade food with authentic taste. The subscription plan is perfect for my budget.',
    rating: 4
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Fitness Trainer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'I love that I can get nutritious, calorie-counted meals that fit my fitness routine. The quality is consistent, and I can customize my meals according to my diet plan.',
    rating: 5
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-4">
            Customer Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Don't just take our word for it. Hear from people who enjoy our tiffin service every day.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="glass-card p-6 flex flex-col h-full"
              variants={item}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Brand Logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-gray-500 mb-6">TRUSTED BY COMPANIES AND ORGANIZATIONS</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-70">
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                alt="Google Logo" 
                className="h-8"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" 
                alt="Apple Logo" 
                className="h-8"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" 
                alt="Facebook Logo" 
                className="h-8"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                alt="LinkedIn Logo" 
                className="h-8"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg" 
                alt="Amazon Logo" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
