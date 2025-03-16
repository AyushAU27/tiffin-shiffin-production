
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChefHat, Truck, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navigateToDashboard = () => {
    if (!user) return;
    navigate(`/dashboard/${user.type}`);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag 
              className={cn(
                "h-8 w-8 transition-colors duration-300",
                isScrolled ? "text-tiffin-saffron" : "text-tiffin-saffron"
              )} 
            />
            <span className="font-display text-xl font-bold">Tiffin Shiffin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/plans" className="nav-link">Plans</Link>
            <Link to="/customer" className="nav-link">For Customers</Link>
            <Link to="/chef" className="nav-link">For Chefs</Link>
            <Link to="/delivery" className="nav-link">For Delivery</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" className="hover:text-primary" onClick={navigateToDashboard}>
                  Dashboard
                </Button>
                <Button variant="outline" className="hover:text-primary" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="hover:text-primary"
                  onClick={() => navigate('/customer')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => navigate('/customer')}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden pt-20',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col h-full">
          {isAuthenticated && (
            <div className="flex items-center p-4 mb-6 bg-gray-50 rounded-lg">
              <User className="h-10 w-10 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="p-0 h-auto text-primary"
                  onClick={navigateToDashboard}
                >
                  View Dashboard
                </Button>
              </div>
            </div>
          )}
          
          <nav className="flex flex-col space-y-6 text-lg">
            <Link 
              to="/" 
              className="flex items-center py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-medium">Home</span>
            </Link>
            <Link 
              to="/plans" 
              className="flex items-center py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag className="mr-3 h-5 w-5 text-primary" />
              <span className="font-medium">Subscription Plans</span>
            </Link>
            <Link 
              to="/customer" 
              className="flex items-center py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="mr-3 h-5 w-5 text-primary" />
              <span className="font-medium">For Customers</span>
            </Link>
            <Link 
              to="/chef" 
              className="flex items-center py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ChefHat className="mr-3 h-5 w-5 text-primary" />
              <span className="font-medium">For Home Chefs</span>
            </Link>
            <Link 
              to="/delivery" 
              className="flex items-center py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Truck className="mr-3 h-5 w-5 text-primary" />
              <span className="font-medium">For Delivery Partners</span>
            </Link>
          </nav>
          <div className="mt-auto grid grid-cols-2 gap-4">
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                className="w-full col-span-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    navigate('/customer');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="w-full"
                  onClick={() => {
                    navigate('/customer');
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
