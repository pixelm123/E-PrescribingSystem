import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home'; 
import About from './components/Home/About';
import Services from './components/Home/Services';
import FAQ from './components/Home/FAQ';
import Register from './components/Home/Register';
import Login from './components/Home/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import NurseDashboard from './components/Nurse/NurseDashboard';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import PharmacistDashboard from './components/Pharmacist/PharmacistDashboard';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/faq',
        element: <FAQ />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
    },
    {
        path: '/nurse/dashboard',
        element: <NurseDashboard />,
    },
    {
        path: '/doctor/dashboard',
        element: <DoctorDashboard />,
    },
    {
        path: '/pharmacist/dashboard',
        element: <PharmacistDashboard />,
    },
]);


function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer position='top-center' />
        </>
    );
}

export default App;
