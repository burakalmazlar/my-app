import React, { useContext } from 'react'
import Header from './Header';
import Counter from './Counter';
import Users from './Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import DashboardLayout from '../layout/Dashboard';
import AuthLayout from '../layout/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Form from './Form';
import FormWithFormik from './FormWithFormik';
import ThemeContext from '../context/ThemeContext';

const Container = () => {
    const { theme } = useContext(ThemeContext);

    const variable = "Helo!"
    const isLoggedIn = true;

    return (
        <div className={`theme theme-${theme}`}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<DashboardLayout />}>
                        <Route path='/users' element={<Users />}></Route>
                        <Route path='/users/:id' element={<User />}></Route>
                        <Route path='/form' element={<Form />}></Route>
                        <Route path='/formik' element={<FormWithFormik />}></Route>
                        <Route path='/counter' element={<Counter />}></Route>
                    </Route>

                    <Route path='auth' element={<AuthLayout />}>
                        <Route index element={<Login />}></Route>
                        <Route path='register' element={<Register />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Container;