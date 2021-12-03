import React from 'react';
import { Link } from 'react-router-dom';
import './css/Form.css';
import useFormLogin from '../hooks/login/useFormLogin';
import LoginValidation from '../hooks/login/loginValidation';
import Navbar from '../components/login&register/Navbar';


const Login = () => {

    //custom hook
    const { handleChange, handleSubmit, values, errors, registerCheck, emailCheck, passCheck } = useFormLogin(LoginValidation)


    return (
        <>
            <Navbar />
            <div className="login">
                <div className="login__box">
                    <div className="login__title">Login</div>
                    {registerCheck && <div className="errorBox">{registerCheck}</div>}
                    {emailCheck && <div className="errorBox">{emailCheck}</div>}
                    {passCheck && <div className="errorBox">{passCheck}</div>}
                    <form className="login__form" onSubmit={handleSubmit}>
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
                        </div>
                        <div className="login__input_box">
                            <label htmlFor="email" className="login__label">Email</label>
                            <input 
                                type="text"  
                                placeholder="example@support.com" 
                                className="login__input"
                                name="email"
                                id="email"  
                                value={values.email}
                                onChange={handleChange}  
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>    
                        <div className="login__input_box">
                            <label htmlFor="Password" className="login__label">Password</label>
                            <input 
                                type="password"  
                                placeholder="******" 
                                className="login__input"
                                name="password"
                                id="password" 
                                value={values.password}
                                onChange={handleChange}   
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <button type="submit" className="login__btn">Login</button>
                    </form>
                    <div className="register__link">
                        You don't have account! &nbsp;
                        <Link to="/student/register">SignUp here</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
