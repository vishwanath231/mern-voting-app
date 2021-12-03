import React from 'react';
import { Link } from 'react-router-dom';
import './css/Form.css';
import useFormRegister from '../hooks/register/useFormRegister';
import RegisterValidation from '../hooks/register/registerValidation';
import Navbar from '../components/login&register/Navbar';


const Register = () => {

    //custom hook
    const { handleChange, handleSubmit, values, errors, emailCheck, registerCheck} = useFormRegister(RegisterValidation)


    return (
        <>
            <Navbar />
            <div className="register">
                <div className="register__box">
                    <div className="register__title">register</div>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__input_box">
                            <label htmlFor="username" className="register__label">Username</label>
                            <input 
                                type="text"  
                                placeholder="will smith" 
                                className="register__input"
                                name="username"
                                id="username" 
                                value={values.username}
                                onChange={handleChange}   
                            />
                            {errors.username && <div className="error">{errors.username}</div>}
                        </div>    
                        <div className="register__input_box">
                            <label htmlFor="register_no" className="register__label">Register No</label>
                            <input 
                                type="text"  
                                placeholder="-----" 
                                className="register__input"
                                name="register_no"
                                id="register_no" 
                                value={values.register_no}
                                onChange={handleChange}   
                            />
                            {errors.register_no && <div className="error">{errors.register_no}</div>}
                            {registerCheck && <div className="error">{registerCheck}</div>}
                        </div>    
                        <div className="register__input_box">
                            <label htmlFor="email" className="register__label">Email</label>
                            <input 
                                type="text"  
                                placeholder="example@support.com" 
                                className="register__input"
                                name="email"
                                id="email" 
                                value={values.email}
                                onChange={handleChange}   
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                            {emailCheck && <div className="error">{emailCheck}</div>}
                        </div>    
                        <div className="register__input_box">
                            <label htmlFor="password" className="register__label">Password</label>
                            <input 
                                type="password"  
                                placeholder="******" 
                                className="register__input"
                                name="password"
                                id="password" 
                                value={values.password}
                                onChange={handleChange}   
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <div className="register__input_box">
                            <label htmlFor="cpassword" className="register__label">Confirm Password</label>
                            <input 
                                type="password"  
                                placeholder="******" 
                                className="register__input"
                                name="cpassword"
                                id="cpassword"  
                                value={values.cpassword}
                                onChange={handleChange}  
                            />
                            {errors.cpassword && <div className="error">{errors.cpassword}</div>}
                        </div>
                        <button type="submit" className="register__btn">Register</button>
                    </form>
                    <div className="login__link">
                        You have account! &nbsp;
                        <Link to="/">Login here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
