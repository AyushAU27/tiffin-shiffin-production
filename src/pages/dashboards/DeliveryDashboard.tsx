
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Truck, Clock, Calendar, BarChart3, MapIcon, UserCircle } from 'lucide-react';

const DeliveryDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout title="Delivery Partner Dashboard" userType="delivery">
      <div className="space-y-6">
        <section>
          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-2">Welcome, {user?.name}!</h2>
            <p className="text-gray-600">
              Manage your deliveries, track your earnings, and view your schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 bg-tiffin-mint/10">
              <h3 className="font-semibold text-tiffin-mint mb-1">Today's Deliveries</h3>
              <p className="text-2xl font-bold">8</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-saffron/10">
              <h3 className="font-semibold text-tiffin-saffron mb-1">Completed</h3>
              <p className="text-2xl font-bold">5</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-cardamom/10">
              <h3 className="font-semibold text-tiffin-cardamom mb-1">Today's Earnings</h3>
              <p className="text-2xl font-bold">₹840</p>
            </Card>
            
            <Card className="p-4 bg-tiffin-cinnamon/10">
              <h3 className="font-semibold text-tiffin-cinnamon mb-1">Week's Earnings</h3>
              <p className="text-2xl font-bold">₹4,220</p>
            </Card>
          </div>
        </section>
        
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Current Deliveries</h3>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Ravi Desai</h4>
                        <p className="text-sm text-gray-500">Wellness Pro - Lunch</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">In Progress</span>
                        <p className="text-sm text-gray-500 mt-1">12:45 PM</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">202 Sunshine Apartments, Andheri West</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        <MapIcon className="h-3 w-3 mr-1" />
                        Navigate
                      </Button>
                      <Button size="sm" variant="default" className="text-xs h-8">
                        Mark Delivered
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Sanjay Gupta</h4>
                        <p className="text-sm text-gray-500">Family Delight - Lunch</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Pickup Ready</span>
                        <p className="text-sm text-gray-500 mt-1">1:00 PM</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">501 Royal Palace, Juhu</p>
                    </div>
                    <div className="flex justify-end items-center mt-3">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        Start Delivery
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 border rounded-lg">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Priya Sharma</h4>
                        <p className="text-sm text-gray-500">Basic Tiffin - Lunch</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Pickup Ready</span>
                        <p className="text-sm text-gray-500 mt-1">1:15 PM</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">304 Green Valley, Bandra</p>
                    </div>
                    <div className="flex justify-end items-center mt-3">
                      <Button size="sm" variant="outline" className="text-xs h-8">
                        Start Delivery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Today's Schedule</h3>
              </div>
              
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <h4 className="font-medium">Lunch Deliveries</h4>
                  <p className="text-sm text-gray-500">12:00 PM - 2:30 PM</p>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-3 py-1">
                  <h4 className="font-medium">Break</h4>
                  <p className="text-sm text-gray-500">2:30 PM - 4:00 PM</p>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-3 py-1">
                  <h4 className="font-medium">Dinner Deliveries</h4>
                  <p className="text-sm text-gray-500">7:00 PM - 9:30 PM</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Weekly Performance</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deliveries</span>
                  <span className="font-medium">42</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">On-time Rate</span>
                  <span className="font-medium">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Customer Rating</span>
                  <span className="font-medium">4.8/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DeliveryDashboard;
