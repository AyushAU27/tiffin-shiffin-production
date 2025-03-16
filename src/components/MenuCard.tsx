
import React from 'react';
import { Utensils, Star, Leaf, Activity, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  menu: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    rating: number;
    isVeg: boolean;
    calories?: string;
    allergens?: string[];
  };
  className?: string;
}

const MenuCard = ({ menu, className }: MenuCardProps) => {
  return (
    <motion.div 
      className={cn("overflow-hidden rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-300", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={menu.image} 
          alt={menu.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold flex items-center">
          <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
          {menu.rating}
        </div>
        <div className="absolute top-2 left-2 rounded-full p-1 shadow-sm" style={{ backgroundColor: menu.isVeg ? '#4CAF50' : '#F44336' }}>
          {menu.isVeg ? (
            <Leaf className="h-3 w-3 text-white" />
          ) : (
            <Utensils className="h-3 w-3 text-white" />
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{menu.name}</h3>
          <span className="text-primary font-medium">{menu.price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{menu.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {menu.calories && (
            <div className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs">
              <Activity className="h-3 w-3 mr-1 text-gray-500" />
              {menu.calories} cal
            </div>
          )}
          
          {menu.isVeg ? (
            <div className="inline-flex items-center rounded-full bg-tiffin-cardamom/10 px-2.5 py-0.5 text-xs text-tiffin-cardamom">
              <Leaf className="h-3 w-3 mr-1" />
              Vegetarian
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-600">
              <Utensils className="h-3 w-3 mr-1" />
              Non-Vegetarian
            </div>
          )}
        </div>
        
        {menu.allergens && menu.allergens.length > 0 && (
          <div className="flex items-start space-x-1.5 text-xs text-gray-500">
            <AlertTriangle className="h-3 w-3 text-amber-500 mt-0.5" />
            <p>Allergens: {menu.allergens.join(', ')}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;
