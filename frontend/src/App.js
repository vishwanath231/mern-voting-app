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
import AdminLogin from './screen/admin/AdminLogin';
import AdminHome from './screen/admin/AdminHome';
import AdminStudentDetails from './screen/admin/AdminStudentDetails';
import AdminNominationList from './screen/admin/AdminNominationList';
import AdminNominationDetails from './screen/admin/AdminNominationDetails';
import AdminVotingDetails from './screen/admin/AdminVotingDetails';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Login />} />
                    <Route path="/student/register"  element={<Register />} />
                    <Route path="/student/home"  element={<Home />} />
                    <Route path="/student/nominationForm" element={<NominationForm />} />
                    <Route path="/student/nominationList" element={<NominationList />} />
                    <Route path="/student/nomination/:name/:id" element={<NominationDetails />}  />
                    <Route path="/student/voteForm" element={<VoteForm />} />


                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/home"  element={<AdminHome />} />
                    <Route path="/admin/studentDetails" element={<AdminStudentDetails />} />
                    <Route path="/admin/nominationList" element={<AdminNominationList />} />
                    <Route path="/admin/nominationDetails/:name/:id" element={<AdminNominationDetails />} />
                    <Route path="/admin/votingDetails" element={<AdminVotingDetails />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
