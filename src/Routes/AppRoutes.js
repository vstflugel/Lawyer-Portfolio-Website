import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignUp from '../sign-up/SignUp';
import SignIn from '../sign-in/SignIn';
// import Dashboard from '../dashboard/Dashboard';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </Router>
);
      // <Route path="/dashboard" element={ <PrivateRoute isAuthenticated={isAuthenticated}> <Dashboard /> </PrivateRoute>} />

export default AppRoutes;

