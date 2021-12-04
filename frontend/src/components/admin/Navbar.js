import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import '../css/Navbar.css';
import logo from '../img/logo.jpg';

const Navbar = () => {


    const [show, setShow] = useState(false);
    const [pages, setPages] = useState(false);

    const showProfile = () => setShow(!show) 
    const showPages = () => setPages(!pages) 

    const email = JSON.parse(localStorage.getItem('adminInfo'));
    const splitEmail = email.split('@')


    const logout = () => {
        localStorage.removeItem('adminInfo')
    }

    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <Link to="/admin/home" className="nav__logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="nav__link">
                        
                        <div>
                            <Link to="/admin/home" className="home__link">Home</Link>
                        </div>

                        <div className="pages" onClick={showPages}>
                            Pages 
                            {
                                !pages ? <BsFillCaretDownFill className="icon" /> : <BsFillCaretUpFill className="icon" />
                            }
                        </div>
                        
                        <div className="profile" onClick={showProfile}>
                            {splitEmail[0]} 
                            {
                                !show ? <BsFillCaretDownFill className="icon" /> : <BsFillCaretUpFill className="icon" />
                            }
                        </div>

                        {
                            show ? (
                                <div className="s__profile_box">
                                    <p className="s__email">{email}</p>
                                    <Link to="/" className="logout" onClick={logout}>logout</Link>
                                </div>
                            ) : null
                        }

                        {
                            pages ? (
                                <div className="pages__box">
                                    <li>
                                        <ul><Link to="/admin/home" className="link">Home</Link></ul>
                                        <ul><Link to="/admin/studentDetails" className="link">Student Details</Link></ul>
                                        <ul><Link to="/admin/nominationList" className="link">Nomination List</Link></ul>
                                        <ul><Link to="/admin/votingDetails" className="link">Voting Details</Link></ul>
                                    </li>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar;
