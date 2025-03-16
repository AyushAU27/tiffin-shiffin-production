
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { User } from '@/services/dataService';

interface ProtectedRouteProps {
  children: ReactNode;
  userType?: 'customer' | 'chef' | 'delivery';
}

const ProtectedRoute = ({ children, userType }: ProtectedRouteProps) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If userType is specified, check if user has correct type
  if (userType && (user as User)?.type !== userType) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
