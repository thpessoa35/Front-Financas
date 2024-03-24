import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../Pages/Login/Login';
import { Register } from '../Pages/Register/Register';
import Debit from '../Pages/Debit/Debit';
import { ProtectedRoutes } from './PrivateRoutes/Home';
import UserService from '../Service/ServiceApi'
import Credit from '../Pages/Credit/Credit';
import DebitFunction from '../Pages/Debit/DebitFunction/Debit';


const AppRoutes: React.FC = () => {
  const userService = new UserService();
  const isUserAuthenticated = userService.SetLocalStore();

  return (
    <Router>
      <Routes>  
        <Route
          path='/'
          element={isUserAuthenticated ? <Navigate to='/debit' /> : <Navigate to='/login' />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/debit" element={<ProtectedRoutes><Debit /></ProtectedRoutes>} />
        <Route path="/credit" element={<ProtectedRoutes><Credit /></ProtectedRoutes>} />
        <Route path="/debit/funcoes" element={<ProtectedRoutes>< DebitFunction  /></ProtectedRoutes>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
