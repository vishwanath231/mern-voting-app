import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/admin/Navbar';

const AdminHome = () => {
    return (
        <>
            <Navbar />
            <div className="admin__home">
                <div className="admin__home_box">
                    <Link to="/admin/studentDetails" className="admin__home_student">
                        <div className="admin__student_icon"></div>
                        <div className="">
                            students
                        </div>
                    </Link> 
                    <Link to="/admin/nominationDetails" className="admin__home_nomination">
                        <div className="admin__student_icon"></div>
                        <div className="">
                            nomination
                        </div>
                    </Link> 
                    <Link to="/admin/votingDetails" className="admin__home_voting">
                        <div className="admin__student_icon"></div>
                        <div className="">
                            vote
                        </div>
                    </Link> 
                </div>
            </div>
        </>
    )
}

export default AdminHome;
