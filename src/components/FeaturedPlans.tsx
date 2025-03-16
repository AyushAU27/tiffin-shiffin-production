
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const plans = [
  {
    id: 1,
    name: 'Veg Delight',
    price: '₹1,999',
    duration: 'per month',
    description: 'Perfect for vegetarians who want daily nutritious meals',
    features: [
      'Daily vegetarian tiffin',
      'Choice of North or South Indian cuisine',
      'Customizable spice levels',
      'Fresh seasonal vegetables',
      'Free delivery',
    ],
    popular: false,
    color: 'bg-tiffin-cardamom',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    menu: [
      'Paneer Butter Masala with Roti',
      'Dal Tadka with Jeera Rice',
      'Aloo Gobi with Pulao',
      'Mix Veg Curry with Paratha',
      'Chole Bhature (Weekend Special)'
    ]
  },
  {
    id: 2,
    name: 'Premium Mix',
    price: '₹2,499',
    duration: 'per month',
    description: 'Our most popular plan with both veg and non-veg options',
    features: [
      'Mix of veg and non-veg meals',
      'Premium quality ingredients',
      'Chef-special weekend meals',
      'Customizable menu',
      'Priority delivery',
    ],
    popular: true,
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    menu: [
      'Butter Chicken with Naan',
      'Mutton Curry with Basmati Rice',
      'Fish Curry with Steamed Rice',
      'Chicken Biryani (Weekend Special)',
      'Veg Dishes also available on request'
    ]
  },
  {
    id: 3,
    name: 'Fitness Pro',
    price: '₹2,899',
    duration: 'per month',
    description: 'Nutrition-focused meals for fitness enthusiasts',
    features: [
      'High protein meals',
      'Calorie-counted portions',
      'Nutrition information provided',
      'Consultation with nutrition expert',
      'No added preservatives',
    ],
    popular: false,
    color: 'bg-tiffin-mint',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    menu: [
      'Grilled Chicken with Quinoa',
      'Tofu Scramble with Brown Rice',
      'Protein-packed Sprouts Salad',
      'Egg White Masala with Multigrain Roti',
      'Steamed Fish with Vegetables'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const FeaturedPlans = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = (planId: number) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please login or register as a customer to subscribe to a plan",
        variant: "destructive"
      });
      
      setTimeout(() => {
        navigate('/customer');
      }, 1500);
      return;
    }
    
    if (user?.type !== 'customer') {
      toast({
        title: "Customer account required",
        description: "Only customers can subscribe to tiffin plans",
        variant: "destructive"
      });
      return;
    }
    
    navigate(`/plans?selected=${planId}`);
  };
  
  return (
    <section className="py-12 md:py-24 bg-gray-50" id="plans">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-4">
            Subscription Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight mb-4">
            Choose Your <span className="text-primary">Perfect</span> Tiffin Plan
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Flexible subscription plans that cater to your taste, diet preferences, and budget.
          </p>
        </div>
        
        <motion.div 
          className="grid gap-6 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`relative rounded-xl overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:shadow-md ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              variants={item}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10 bg-primary text-white text-xs font-bold px-3 py-1">
                  MOST POPULAR
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.duration}</span>
                </div>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`mr-2 ${plan.color} rounded-full p-1 mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Sample Menu Items:</h4>
                  <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
                    {plan.menu.slice(0, 3).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'} group`}
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="group" asChild>
            <Link to="/plans">
              View All Plans
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlans;
