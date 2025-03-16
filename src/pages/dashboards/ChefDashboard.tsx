
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Utensils, Users, ShoppingCart, CheckCircle } from 'lucide-react';

const ChefDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout title="Chef Dashboard" userType="chef">
      <div className="space-y-6">
        <section>
          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-2">Welcome, Chef {user?.name}!</h2>
            <p className="text-gray-600">
              Manage your tiffin menu, orders, and cooking schedule from your dashboard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 bg-tiffin-mint/10">
              <h3 className="font-semibold text-tiffin-mint mb-1">Today's Orders</h3>
              <p className="text-2xl font-bold">12</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-saffron/10">
              <h3 className="font-semibold text-tiffin-saffron mb-1">Total Customers</h3>
              <p className="text-2xl font-bold">35</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-cardamom/10">
              <h3 className="font-semibold text-tiffin-cardamom mb-1">This Week</h3>
              <p className="text-2xl font-bold">84 meals</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-cinnamon/10">
              <h3 className="font-semibold text-tiffin-cinnamon mb-1">Revenue</h3>
              <p className="text-2xl font-bold">₹25,840</p>
            </Card>
          </div>
        </section>
        
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Today's Schedule</h3>
                </div>
                <Button variant="outline" size="sm">View Full Schedule</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 border rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="font-medium">Morning Prep</p>
                    <p className="text-sm text-gray-500">8:00 AM - 10:00 AM</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                
                <div className="flex items-center p-3 border border-primary/30 rounded-lg bg-primary/5">
                  <div className="flex-1">
                    <p className="font-medium">Lunch Preparation</p>
                    <p className="text-sm text-gray-500">10:00 AM - 11:30 AM</p>
                  </div>
                  <div className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded">Current</div>
                </div>
                
                <div className="flex items-center p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">Lunch Delivery</p>
                    <p className="text-sm text-gray-500">11:30 AM - 12:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">Dinner Preparation</p>
                    <p className="text-sm text-gray-500">4:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Today's Menu</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Lunch</h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>Dal Tadka</li>
                    <li>Jeera Rice</li>
                    <li>Mixed Vegetable Sabzi</li>
                    <li>Roti (4 pcs)</li>
                    <li>Cucumber Raita</li>
                  </ul>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Dinner</h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>Paneer Butter Masala</li>
                    <li>Steamed Rice</li>
                    <li>Aloo Gobi</li>
                    <li>Roti (4 pcs)</li>
                    <li>Green Salad</li>
                  </ul>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                <ChefHat className="h-4 w-4 mr-2" />
                Update Menu
              </Button>
            </Card>
          </div>
        </section>
        
        <section>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Recent Orders</h3>
              </div>
              <Button variant="outline" size="sm">View All Orders</Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-medium text-gray-600">Customer</th>
                    <th className="text-left py-3 font-medium text-gray-600">Plan</th>
                    <th className="text-left py-3 font-medium text-gray-600">Meal Type</th>
                    <th className="text-left py-3 font-medium text-gray-600">Time</th>
                    <th className="text-left py-3 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">Rahul Sharma</td>
                    <td className="py-3">Family Delight</td>
                    <td className="py-3">Lunch</td>
                    <td className="py-3">12:15 PM</td>
                    <td className="py-3"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Delivered</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Priya Patel</td>
                    <td className="py-3">Wellness Pro</td>
                    <td className="py-3">Lunch</td>
                    <td className="py-3">12:30 PM</td>
                    <td className="py-3"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">In Transit</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Amit Verma</td>
                    <td className="py-3">Basic Tiffin</td>
                    <td className="py-3">Lunch</td>
                    <td className="py-3">12:45 PM</td>
                    <td className="py-3"><span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Preparing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default ChefDashboard;
