import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import NominationForm from './screen/NominationForm';
import NominationList from './screen/NominationList';
import NominationDetails from './screen/NominationDetails';
import VoteForm from './screen/VoteForm';
import AdminLogin from './screen/AdminLogin';
import AdminHome from './screen/AdminHome';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Login />} />
                    <Route path="/register"  element={<Register />} />
                    <Route path="/home"  element={<Home />} />
                    <Route path="/nomination" element={<NominationForm />} />
                    <Route path="/nominationList" element={<NominationList />} />
                    <Route path="/nomination/:name/:id" element={<NominationDetails />}  />
                    <Route path="/vote" element={<VoteForm />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/adminHome"  element={<AdminHome />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
