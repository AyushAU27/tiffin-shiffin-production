
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Customer from "./pages/Customer";
import Chef from "./pages/Chef";
import Delivery from "./pages/Delivery";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "./context/AuthContext";
import CustomerDashboard from "./pages/dashboards/CustomerDashboard";
import ChefDashboard from "./pages/dashboards/ChefDashboard";
import DeliveryDashboard from "./pages/dashboards/DeliveryDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/chef" element={<Chef />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/plans" element={<Plans />} />
              
              {/* Dashboard routes */}
              <Route path="/dashboard/customer" element={
                <ProtectedRoute userType="customer">
                  <CustomerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/chef" element={
                <ProtectedRoute userType="chef">
                  <ChefDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/delivery" element={
                <ProtectedRoute userType="delivery">
                  <DeliveryDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
