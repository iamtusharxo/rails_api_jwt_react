import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Users from '../Users/Users';
import Logout from '../Logout/Logout';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Registration />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/logout/*" element={<Logout />} />
        </Routes>
    </Router>
  );
}

export default App;