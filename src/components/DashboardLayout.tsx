
import React, { ReactNode } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, LogOut, User, Home } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  userType: 'customer' | 'chef' | 'delivery';
}

const DashboardLayout = ({ children, title, userType }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-tiffin-saffron" />
            <span className="font-display text-xl font-bold">Tiffin Shiffin</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 p-2 mb-6 md:hidden">
              <User className="h-8 w-8 text-gray-400" />
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <Link 
                to={`/dashboard/${userType}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              
              {userType === 'customer' && (
                <>
                  <Link 
                    to="/plans"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Browse Plans</span>
                  </Link>
                </>
              )}
              
              {userType === 'chef' && (
                <>
                  {/* Chef specific nav items */}
                </>
              )}
              
              {userType === 'delivery' && (
                <>
                  {/* Delivery specific nav items */}
                </>
              )}
            </nav>
          </div>
        </aside>
        
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-6">{title}</h1>
          {children}
        </main>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
