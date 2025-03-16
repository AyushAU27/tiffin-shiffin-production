
// Simple data storage service using localStorage

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'customer' | 'chef' | 'delivery';
  createdAt: Date;
}

export interface ChefProfile extends User {
  experience: string;
  speciality: string;
  address: string;
}

export interface DeliveryProfile extends User {
  vehicleType: string;
  licenseNumber: string;
  aadharNumber: string;
  availability: string;
}

export interface CustomerProfile extends User {
  // Additional customer-specific fields can be added here
}

// Generate a simple UUID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Save user data
export const saveUser = (userData: Omit<User, 'id' | 'createdAt'> & Record<string, any>): User => {
  const users = getUsers();
  
  const newUser: User = {
    id: generateId(),
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    type: userData.type,
    createdAt: new Date(),
  };
  
  // Save additional profile data based on user type
  if (userData.type === 'chef') {
    const chefProfile: ChefProfile = {
      ...newUser,
      experience: userData.experience || '',
      speciality: userData.speciality || '',
      address: userData.address || '',
    };
    users.push(chefProfile);
    
    // Save chef profiles separately
    const chefProfiles = getChefProfiles();
    chefProfiles.push(chefProfile);
    localStorage.setItem('chefProfiles', JSON.stringify(chefProfiles));
  } 
  else if (userData.type === 'delivery') {
    const deliveryProfile: DeliveryProfile = {
      ...newUser,
      vehicleType: userData.vehicleType || '',
      licenseNumber: userData.licenseNumber || '',
      aadharNumber: userData.aadharNumber || '',
      availability: userData.availability || '',
    };
    users.push(deliveryProfile);
    
    // Save delivery profiles separately
    const deliveryProfiles = getDeliveryProfiles();
    deliveryProfiles.push(deliveryProfile);
    localStorage.setItem('deliveryProfiles', JSON.stringify(deliveryProfiles));
  }
  else {
    users.push(newUser);
    
    // Save customer profiles separately
    const customerProfiles = getCustomerProfiles();
    customerProfiles.push(newUser as CustomerProfile);
    localStorage.setItem('customerProfiles', JSON.stringify(customerProfiles));
  }
  
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
};

// Get all users
export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem('users');
  return usersJson ? JSON.parse(usersJson) : [];
};

// Get profiles by type
export const getChefProfiles = (): ChefProfile[] => {
  const profilesJson = localStorage.getItem('chefProfiles');
  return profilesJson ? JSON.parse(profilesJson) : [];
};

export const getDeliveryProfiles = (): DeliveryProfile[] => {
  const profilesJson = localStorage.getItem('deliveryProfiles');
  return profilesJson ? JSON.parse(profilesJson) : [];
};

export const getCustomerProfiles = (): CustomerProfile[] => {
  const profilesJson = localStorage.getItem('customerProfiles');
  return profilesJson ? JSON.parse(profilesJson) : [];
};

// Login user - check if credentials match
export const loginUser = (email: string, password: string): User | null => {
  // In a real app, we would hash passwords and verify them
  // For demo, we'll just check if the user exists by email
  const users = getUsers();
  const user = users.find(u => u.email === email);
  
  // In a real app, we'd verify the password hash
  // For our mock, we'll just return the user if found
  return user || null;
};

// Get user by ID
export const getUserById = (id: string): User | null => {
  const users = getUsers();
  return users.find(u => u.id === id) || null;
};

// Simple auth token for current session
export const setCurrentUser = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};

// Subscription plans storage
export interface Plan {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
  menu?: string[];
}

export const getPlans = (): Plan[] => {
  const plans = localStorage.getItem('plans');
  if (plans) {
    return JSON.parse(plans);
  }
  
  // Default plans if none exist
  const defaultPlans = [
    {
      id: 1,
      name: 'Basic Tiffin',
      price: '₹1,499',
      duration: 'per month',
      description: 'Perfect for singles or students looking for simple, nutritious meals',
      features: [
        'Single meal delivery (lunch or dinner)',
        '5 days a week (Mon-Fri)',
        'Standard menu rotation',
        'Basic meal customization',
        'Standard delivery time slot'
      ],
      popular: false,
      menu: [
        'Dal Rice with Papad',
        'Aloo Paratha with Yogurt',
        'Mixed Veg Curry with Rice',
        'Puri Sabzi',
        'Vegetable Khichdi',
        'Plain Paratha with Chana Masala',
        'Rajma Rice with Salad'
      ]
    },
    {
      id: 2,
      name: 'Family Delight',
      price: '₹3,499',
      duration: 'per month',
      description: 'Ideal for families looking for complete meal solutions',
      features: [
        'Two meals daily (lunch and dinner)',
        '6 days a week (Mon-Sat)',
        'Premium menu rotation with 15+ options',
        'Customizable meals for family preferences',
        'Priority delivery with flexible time slots',
        'Weekly menu consultation'
      ],
      popular: true,
      menu: [
        'Dal Makhani with Butter Naan',
        'Paneer Butter Masala with Jeera Rice',
        'Chicken Curry with Pulao',
        'Veg Biryani with Raita',
        'Chole Bhature',
        'Aloo Gobi with Butter Roti',
        'Fish Curry with Steamed Rice',
        'Mutton Curry with Naan'
      ]
    },
    {
      id: 3,
      name: 'Wellness Pro',
      price: '₹2,799',
      duration: 'per month',
      description: 'Specialized for health-conscious individuals with dietary needs',
      features: [
        'Two meals daily (lunch and dinner)',
        '7 days a week',
        'Nutrition-focused menu options',
        'Calorie-counted and macro-balanced meals',
        'Diet specialist consultation',
        'Specialized meal plans (keto, low-carb, etc)'
      ],
      popular: false,
      menu: [
        'Grilled Chicken with Quinoa',
        'Tofu Stir Fry with Brown Rice',
        'Oats Idli with Sambar',
        'Sprouts Salad with Multigrain Roti',
        'Steamed Fish with Vegetables',
        'Egg White Bhurji with Sweet Potato',
        'Protein Pancakes with Greek Yogurt',
        'Ragi Dosa with Coconut Chutney'
      ]
    }
  ];
  
  localStorage.setItem('plans', JSON.stringify(defaultPlans));
  return defaultPlans;
};

export interface Subscription {
  id: string;
  userId: string;
  planId: number;
  startDate: Date;
  status: 'active' | 'cancelled' | 'expired';
  paymentDetails?: {
    method: 'card' | 'upi';
    last4?: string;
    upiId?: string;
  };
}

export const subscribeToPlan = (userId: string, planId: number, paymentDetails?: Subscription['paymentDetails']): void => {
  const subscriptions = getSubscriptions();
  subscriptions.push({
    id: generateId(),
    userId,
    planId,
    startDate: new Date(),
    status: 'active',
    paymentDetails
  });
  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
};

export const getSubscriptions = (): Subscription[] => {
  const subscriptionsJson = localStorage.getItem('subscriptions');
  return subscriptionsJson ? JSON.parse(subscriptionsJson) : [];
};

export const getUserSubscriptions = (userId: string): Subscription[] => {
  const subscriptions = getSubscriptions();
  return subscriptions.filter(sub => sub.userId === userId);
};

