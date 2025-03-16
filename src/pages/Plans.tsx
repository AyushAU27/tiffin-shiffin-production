
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, BadgeCheck, CreditCard, Wallet } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { getPlans, subscribeToPlan } from '@/services/dataService';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Plans = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const plans = getPlans();
  
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);

  // Check if a plan is pre-selected from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planId = params.get('selected');
    if (planId) {
      setSelectedPlan(Number(planId));
    }
  }, [location]);

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
    
    setSelectedPlan(planId);
    setPaymentOpen(true);
  };

  const handlePayment = () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      try {
        if (selectedPlan && user) {
          subscribeToPlan(user.id, selectedPlan);
          
          setPaymentOpen(false);
          setProcessing(false);
          
          toast({
            title: "Subscription successful!",
            description: "You have successfully subscribed to the plan",
          });
          
          setTimeout(() => {
            navigate('/dashboard/customer');
          }, 1500);
        }
      } catch (error) {
        setProcessing(false);
        toast({
          title: "Subscription failed",
          description: "An error occurred while processing your subscription",
          variant: "destructive"
        });
      }
    }, 2000);
  };

  const selectedPlanDetails = plans.find(plan => plan.id === selectedPlan);

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Tiffin Plan</h1>
          <p className="text-gray-600">
            Select from our range of subscription plans designed to fit every lifestyle and budget.
            All plans include fresh, home-cooked meals delivered to your doorstep.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`rounded-xl overflow-hidden shadow-sm ${plan.popular ? 'border-primary' : 'border-gray-200'} border relative`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Sample Menu Items:</h4>
                  <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
                    {plan.menu?.slice(0, 3).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    {plan.menu?.length > 3 && (
                      <li className="text-primary cursor-pointer hover:underline">
                        +{plan.menu.length - 3} more items
                      </li>
                    )}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'}`}
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Subscribe Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-4">
            <BadgeCheck className="h-12 w-12 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied with your first week of meals? We'll give you a full refund, no questions asked. 
                Your satisfaction is our top priority, and we're confident you'll love our tiffin service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Complete Your Subscription</DialogTitle>
            <DialogDescription>
              {selectedPlanDetails && (
                <div className="my-2 p-3 bg-gray-50 rounded-md">
                  <p className="font-medium">{selectedPlanDetails.name}</p>
                  <div className="flex items-baseline mt-1">
                    <span className="text-xl font-bold">{selectedPlanDetails.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{selectedPlanDetails.duration}</span>
                  </div>
                </div>
              )}
              Please provide your payment details to subscribe.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="card" onValueChange={(value) => setPaymentMethod(value as 'card' | 'upi')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">
                <CreditCard className="h-4 w-4 mr-2" />
                Credit/Debit Card
              </TabsTrigger>
              <TabsTrigger value="upi">
                <Wallet className="h-4 w-4 mr-2" />
                UPI
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="card" className="space-y-4 mt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    value={cardDetails.cardNumber}
                    onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input 
                    id="cardName" 
                    placeholder="John Doe" 
                    value={cardDetails.cardName}
                    onChange={(e) => setCardDetails({...cardDetails, cardName: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input 
                      id="cvv" 
                      placeholder="123" 
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="upi" className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input 
                  id="upiId" 
                  placeholder="yourname@upi" 
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  You will receive a payment request on your UPI app.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setPaymentOpen(false)}
              disabled={processing}
            >
              Cancel
            </Button>
            <Button 
              onClick={handlePayment} 
              disabled={processing}
            >
              {processing ? 'Processing...' : 'Complete Payment'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Plans;
