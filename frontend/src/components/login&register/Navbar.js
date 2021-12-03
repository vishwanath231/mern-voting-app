import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import '../css/Navbar.css';
import logo from '../img/logo.jpg';

const Navbar = () => {


    const [pages, setPages] = useState(false);

    const showPages = () => setPages(!pages) 


    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <Link to="/home" className="nav__logo">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="nav__link">
                        
                        
                        <div className="pages" onClick={showPages}>
                            Pages 
                            {
                                !pages ? <BsFillCaretDownFill className="icon" /> : <BsFillCaretUpFill className="icon" />
                            }
                        </div>
                        
                        {
                            pages ? (
                                <div className="login__pages_box">
                                    <li>
                                        <ul><Link to="/" className="link">Student</Link></ul>
                                        <ul><Link to="/adminLogin" className="link">Admin</Link></ul>
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
