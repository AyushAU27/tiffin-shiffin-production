
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '@/services/dataService';
import { useAuth } from '@/context/AuthContext';
import { useToast } from "@/components/ui/use-toast";

interface RegisterFormProps {
  type: 'customer' | 'chef' | 'delivery';
  title: string;
  subtitle: string;
}

const RegisterForm = ({ type, title, subtitle }: RegisterFormProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  // Additional fields based on registration type
  const [chefData, setChefData] = useState({
    experience: '',
    speciality: '',
    address: '',
    kitchenPhotos: null
  });
  
  const [deliveryData, setDeliveryData] = useState({
    vehicleType: '',
    licenseNumber: '',
    aadharNumber: '',
    availability: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleChefChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setChefData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDeliveryData(prev => ({ ...prev, [name]: value }));
  };
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Error", description: "Name is required", variant: "destructive" });
      return false;
    }
    
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({ title: "Error", description: "Valid email is required", variant: "destructive" });
      return false;
    }
    
    if (!formData.phone.trim()) {
      toast({ title: "Error", description: "Phone number is required", variant: "destructive" });
      return false;
    }
    
    if (!formData.password) {
      toast({ title: "Error", description: "Password is required", variant: "destructive" });
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match", variant: "destructive" });
      return false;
    }
    
    if (!formData.agreeTerms) {
      toast({ title: "Error", description: "You must agree to the terms and conditions", variant: "destructive" });
      return false;
    }
    
    // Validate type-specific fields
    if (type === 'chef') {
      if (!chefData.experience || !chefData.speciality || !chefData.address) {
        toast({ title: "Error", description: "All chef details are required", variant: "destructive" });
        return false;
      }
    } else if (type === 'delivery') {
      if (!deliveryData.vehicleType || !deliveryData.licenseNumber || !deliveryData.aadharNumber || !deliveryData.availability) {
        toast({ title: "Error", description: "All delivery partner details are required", variant: "destructive" });
        return false;
      }
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Combine all data based on user type
      let userData = {
        ...formData,
        type
      };
      
      if (type === 'chef') {
        userData = { ...userData, ...chefData };
      } else if (type === 'delivery') {
        userData = { ...userData, ...deliveryData };
      }
      
      // Save user to "database" (localStorage)
      const savedUser = saveUser(userData);
      
      // Login the user
      login(savedUser);
      
      toast({
        title: "Registration successful!",
        description: `Welcome to Tiffin Shiffin, ${savedUser.name}!`,
      });
      
      // Redirect to appropriate dashboard
      setTimeout(() => {
        navigate(`/dashboard/${type}`);
      }, 1000);
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div 
      className="glass-card p-8 max-w-md w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
          </div>
          
          {/* Chef specific fields */}
          {type === 'chef' && (
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Cooking Experience</Label>
                <Input 
                  id="experience" 
                  name="experience" 
                  value={chefData.experience} 
                  onChange={handleChefChange} 
                  placeholder="e.g., 5 years" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="speciality">Cuisine Speciality</Label>
                <select 
                  id="speciality" 
                  name="speciality" 
                  value={chefData.speciality} 
                  onChange={handleChefChange as any} 
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
                  required
                >
                  <option value="">Select speciality</option>
                  <option value="north-indian">North Indian</option>
                  <option value="south-indian">South Indian</option>
                  <option value="gujarati">Gujarati</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="bengali">Bengali</option>
                  <option value="multi-cuisine">Multi-Cuisine</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Kitchen Address</Label>
                <Input 
                  id="address" 
                  name="address" 
                  value={chefData.address} 
                  onChange={handleChefChange} 
                  placeholder="Enter your kitchen address" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="kitchenPhotos">Upload Kitchen Photos</Label>
                <Input 
                  id="kitchenPhotos" 
                  name="kitchenPhotos"
                  type="file" 
                  multiple
                  className="cursor-pointer"
                  onChange={(e) => {
                    // Handle file upload logic
                  }} 
                />
                <p className="text-xs text-gray-500 mt-1">Upload clear photos of your kitchen (max 3 images)</p>
              </div>
            </div>
          )}
          
          {/* Delivery specific fields */}
          {type === 'delivery' && (
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <select 
                  id="vehicleType" 
                  name="vehicleType" 
                  value={deliveryData.vehicleType} 
                  onChange={handleDeliveryChange as any} 
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
                  required
                >
                  <option value="">Select vehicle type</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="scooter">Scooter</option>
                  <option value="car">Car</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Driving License Number</Label>
                <Input 
                  id="licenseNumber" 
                  name="licenseNumber" 
                  value={deliveryData.licenseNumber} 
                  onChange={handleDeliveryChange} 
                  placeholder="Enter your license number" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Card Number</Label>
                <Input 
                  id="aadharNumber" 
                  name="aadharNumber" 
                  value={deliveryData.aadharNumber} 
                  onChange={handleDeliveryChange} 
                  placeholder="Enter your Aadhar number" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <select 
                  id="availability" 
                  name="availability" 
                  value={deliveryData.availability} 
                  onChange={handleDeliveryChange as any} 
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                  <option value="evening">Evening (6 PM - 12 AM)</option>
                  <option value="fulltime">Full Time</option>
                  <option value="weekend">Weekends Only</option>
                </select>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Create a password" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              id="confirmPassword" 
              name="confirmPassword" 
              type="password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="Confirm your password" 
              required 
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox 
              id="agreeTerms" 
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => {
                setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }));
              }}
            />
            <label 
              htmlFor="agreeTerms" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
            </label>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={!formData.agreeTerms || isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Register"}
        </Button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <a href="#" className="text-primary hover:underline">Log in</a>
        </p>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
