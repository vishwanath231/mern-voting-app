import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import '../css/Navbar.css';
import logo from '../img/logo.jpg';

const Navbar = () => {


    const [show, setShow] = useState(false);

    const showProfile = () => setShow(!show) 

    const email = JSON.parse(localStorage.getItem('adminInfo'));
    const splitEmail = email.split('@')


    const logout = () => {
        localStorage.removeItem('adminInfo')
    }

    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <Link to="/home" className="nav__logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="nav__link">
                        
                        <div>
                            <Link to="/home" className="home__link">Home</Link>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar;
