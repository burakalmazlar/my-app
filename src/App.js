import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Users from './components/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User';
import DashboardLayout from './layout/Dashboard';
import AuthLayout from './layout/Auth';
import Login from './pages/Login';
import Register from './pages/Register';
import Form from './components/Form';
import FormWithFormik from './components/FormWithFormik';


function App() {

  const variable = "Helo!"
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<User />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/formik' element={<FormWithFormik />}></Route>
        </Route>

        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
