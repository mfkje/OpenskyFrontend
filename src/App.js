import {React} from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing'
import Register from './pages/register/Register'

import './App.css'
// import Login from './pages/login/Login';
import ProtectedRoute from './protected/ProtectedRoute';
import { DataProvider } from './context/DataContext';
import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <>
    <DataProvider>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        {/* <Route path='login' element={<Login/>}/> */}
        <Route path='register' element={<Register/>}/>
        {/* <Route path='homepage' element={<HomePage/>}/> */}
        {/* <Route path='profile' element={<Profile/>}/>
        <Route path='income' element={<IncomeHome/>}/> */}
        <Route path="homepage" element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        } />
      </Routes>
    </DataProvider> 
    </>
  );
}

export default App;
