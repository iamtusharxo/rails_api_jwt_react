import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Users from '../Users/Users';
import Logout from '../Logout/Logout';
import DashboardNavigator from '../Dashboard/DashboardNavigator/DashboardNavigator';
import isLoggedUser from '../shared/config/isLoggedUser';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/dashboard" element={<DashboardNavigator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={isLoggedUser() ? <DashboardNavigator /> : <Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/logout/*" element={<Logout />} />
        </Routes>
    </Router>
  );
}

export default App;