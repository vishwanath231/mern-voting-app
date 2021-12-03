import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/admin/Navbar';

const AdminHome = () => {
    return (
        <>
            <Navbar />
            <div className="admin__home">
                <div className="admin__home_box">
                    <Link to="/studentDetails" className="admin__home_student">
                        <div className="admin__student_icon"></div>
                        <div className="">
                            students
                        </div>
                    </Link> 
                    <div className="admin__home_nomination"></div>
                    <div className="admin__home_voting"></div>
                </div>
            </div>
        </>
    )
}

export default AdminHome;
