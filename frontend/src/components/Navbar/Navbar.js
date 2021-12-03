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

    const email = JSON.parse(localStorage.getItem('userInfo'));
    const register = JSON.parse(localStorage.getItem('userRegister'));
    // const splitEmail = email.split('@')


    const logout = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('userRegister')
    }

    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <Link to="/student/home" className="nav__logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="nav__link">
                        
                        <div>
                            <Link to="/student/home" className="home__link">Home</Link>
                        </div>

                        <div className="pages" onClick={showPages}>
                            Pages 
                            {
                                !pages ? <BsFillCaretDownFill className="icon" /> : <BsFillCaretUpFill className="icon" />
                            }
                        </div>
                        
                        <div className="profile" onClick={showProfile}>
                            {register} 
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
                                        <ul><Link to="/student/home" className="link">Home</Link></ul>
                                        <ul><Link to="/student/voteForm" className="link">Vote Form</Link></ul>
                                        <ul><Link to="/student/nominationForm" className="link">Nomination Form</Link></ul>
                                        <ul><Link to="/student/nominationList" className="link">Nomination List</Link></ul>
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
