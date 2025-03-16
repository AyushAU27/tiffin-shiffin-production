
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Calendar, Clock, MapPin } from 'lucide-react';
import { getPlans, Plan, getSubscriptions } from '@/services/dataService';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  
  useEffect(() => {
    setPlans(getPlans());
    const allSubscriptions = getSubscriptions();
    const userSubscriptions = allSubscriptions.filter(sub => sub.userId === user?.id);
    setSubscriptions(userSubscriptions);
  }, [user?.id]);
  
  const getSubscribedPlan = () => {
    if (subscriptions.length === 0) return null;
    const subscription = subscriptions[0]; 
    return plans.find(plan => plan.id === subscription.planId);
  };
  
  const subscribedPlan = getSubscribedPlan();
  
  return (
    <DashboardLayout title="Customer Dashboard" userType="customer">
      <div className="space-y-6">
        <section>
          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-2">Welcome, {user?.name}!</h2>
            <p className="text-gray-600">
              {subscribedPlan 
                ? "Manage your tiffin subscription and track deliveries." 
                : "Get started by choosing a subscription plan that fits your needs."}
            </p>
          </div>
          
          {!subscribedPlan ? (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-semibold">Choose a Subscription Plan</h2>
              </div>
              <p className="text-gray-600 mb-4">You don't have an active subscription yet. Choose a plan to get started.</p>
              <Button onClick={() => navigate('/plans')}>Browse Plans</Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-semibold">Your Active Plan</h2>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-bold text-xl mb-2">{subscribedPlan.name}</h3>
                <p className="text-gray-600 mb-3">{subscribedPlan.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-2xl font-bold">{subscribedPlan.price}</span>
                    <span className="text-gray-500 ml-1">{subscribedPlan.duration}</span>
                  </div>
                  <Button variant="outline">Manage Plan</Button>
                </div>
              </div>
            </div>
          )}
        </section>
        
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-5 w-5 text-tiffin-mint" />
              <h3 className="font-semibold">Next Delivery</h3>
            </div>
            {subscribedPlan ? (
              <div>
                <p className="text-gray-600">Tomorrow, 12:30 PM</p>
                <p className="text-sm text-gray-500 mt-1">Lunch Delivery</p>
              </div>
            ) : (
              <p className="text-gray-600">No upcoming deliveries</p>
            )}
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-tiffin-cardamom" />
              <h3 className="font-semibold">Delivery Schedule</h3>
            </div>
            {subscribedPlan ? (
              <p className="text-gray-600">Lunch: 12:00 PM - 1:00 PM <br />Dinner: 7:00 PM - 8:00 PM</p>
            ) : (
              <p className="text-gray-600">No active schedule</p>
            )}
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-tiffin-saffron" />
              <h3 className="font-semibold">Delivery Address</h3>
            </div>
            {subscribedPlan ? (
              <>
                <p className="text-gray-600">123 Main Street, Apartment 4B</p>
                <p className="text-sm text-gray-500 mt-1">Mumbai, Maharashtra</p>
                <Button variant="link" size="sm" className="px-0 mt-2">Change Address</Button>
              </>
            ) : (
              <p className="text-gray-600">No address saved</p>
            )}
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
