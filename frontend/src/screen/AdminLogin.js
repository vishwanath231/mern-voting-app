import React from 'react';
import useFormAdmin from '../hooks/admin/useFormAdmin';
import LoginValidation from '../hooks/admin/LoginValidation';
import './css/Form.css';
import Navbar from '../components/login&register/Navbar';

const AdminLogin = () => {

    //custom hook
    const { handleChange, handleSubmit, values, errors, emailCheck, passCheck } = useFormAdmin(LoginValidation)


    return (
        <>
            <Navbar />
            <div className="login">
                <div className="login__box">
                    <div className="login__title">Admin Login</div>
                    {emailCheck && <div className="errorBox">{emailCheck}</div>}
                    {passCheck && <div className="errorBox">{passCheck}</div>}
                    <form className="login__form" onSubmit={handleSubmit}>
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
                </div>
            </div>   
        </>
    )
}

export default AdminLogin;
