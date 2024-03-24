import React, { ReactNode, useEffect } from 'react';
import UserService from '../../Service/ServiceApi';
import { useNavigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  children: ReactNode;
}

const userService = new UserService();

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = userService.SetLocalStore(); 

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <>{children}</> : null; 
};

export default ProtectedRoutes;
