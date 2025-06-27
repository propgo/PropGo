import { useState } from 'react';

export interface AuthState {
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Add authentication logic here
  return { 
    isAuthenticated,
    setIsAuthenticated 
  };
}; 