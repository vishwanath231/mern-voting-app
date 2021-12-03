import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Placeholder from './img/Placeholder.png';
import useNomination from '../hooks/Nomination/useNomination';
import nominationValidate from '../hooks/Nomination/nominationValidate';
import './css/Nomination.css';


const NominationForm = () => {


    const { handleClick, handleImage, handelChange, handleLogo, handleLogoClick, values, errors ,step, prevStep, handleSubmit, stepOneCheck, stepTwoCheck, stepThreeCheck, isSubmitting, progress} = useNomination(nominationValidate);

    return (
        <>
            <Navbar />

                    <div className="nomination__title">Nomination Form</div>
            <div className="nomination">
                <div className="nomination__box">
                    <div className="progress__bar">
                        <div className="bar" style={{width:`${progress}%`}}></div>
                    </div>
                        
                        {
                            step === 1 && 
                            <StepOne 
                                handleClick={handleClick} 
                                handleImage={handleImage} 
                                handelChange={handelChange} 
                                values={values} 
                                errors={errors} 
                                stepOneCheck={stepOneCheck} 
                            />
                        }
                        {
                            step === 2 && 
                            <StepTwo 
                                handelChange={handelChange}
                                values={values}
                                errors={errors}
                                stepTwoCheck={stepTwoCheck}
                                prevStep={prevStep}
                            />
                        }
                        {
                            step === 3 && 
                            <StepThree 
                                handelChange={handelChange}
                                values={values}
                                errors={errors}
                                stepThreeCheck={stepThreeCheck}
                                prevStep={prevStep}
                            />
                        }
                        {
                            step === 4 && 
                            <StepFour 
                                handelChange={handelChange}
                                handleLogoClick={handleLogoClick}
                                handleLogo={handleLogo}
                                values={values}
                                errors={errors}
                                handleSubmit={handleSubmit}
                                prevStep={prevStep}
                                isSubmitting={isSubmitting}
                            />
                        }
                        
                </div>
            </div>  
        </>
    )
}




const StepOne = ({ handleClick, handleImage, handelChange, values, errors, stepOneCheck }) => {

    return (
        <>
            <div className="nomination__profile">
                <img 
                    src={Placeholder}
                    width="200px"
                    alt="placeholder"
                    id="placeholder"
                    onClick={handleClick}
                />
                <label htmlFor="profile" className="nomination__label">Upload Profile</label>
                <input 
                    type="file" 
                    id="profile"
                    name="profile"
                    accept=".png, .jpg, .jpeg"
                    style={{display: "none"}}
                    onChange={handleImage}
                />
                {errors.profile && <div className="error">{errors.profile}</div>}
            </div>
            <div className="nomination__input_box">
                <label htmlFor="name" className="nomination__label">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    className="nomination__input"
                    placeholder="will smith"
                    onChange={handelChange}
                    value={values.name}
                />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <button onClick={stepOneCheck} className="first_nxtBtn">next</button>
        </>
    )
}


const StepTwo = ({ handelChange, values, errors, prevStep, stepTwoCheck }) => {

    return (
        <>
            <div className="nomination__input_box">
                <label htmlFor="email" className="nomination__label">Email</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.email}
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="nomination__input_box">
                <label htmlFor="dob" className="nomination__label">D.O.B</label>
                <input 
                    type="date"
                    id="dob"
                    name="dob"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.dob}
                />
                {errors.dob && <div className="error">{errors.dob}</div>}
            </div>
            
            <div className="nomination__input_box">
                <label htmlFor="mobile_no" className="nomination__label">Mobile</label>
                <input 
                    type="tel"
                    id="mobile_no"
                    name="mobile_no"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.mobile_no}
                />
                {errors.mobile_no && <div className="error">{errors.mobile_no}</div>}
            </div>
            <button onClick={prevStep} className="prev__btn">prev</button>
            <button onClick={stepTwoCheck} className="next__btn" >next</button>
        </>
    )
}



const StepThree = ({ handelChange, values, errors, stepThreeCheck, prevStep }) => {

    return (
        <>
            
            <div className="nomination__input_box">
                <label htmlFor="register_no" className="nomination__label">Register No</label>
                <input 
                    type="text"
                    id="register_no"
                    name="register_no"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.register_no}
                />
                {errors.register_no && <div className="error">{errors.register_no}</div>}
            </div>
            <div className="nomination__input_box">
                <label htmlFor="department" className="nomination__label">Department</label>
                <input 
                    type="text"
                    id="department"
                    name="department"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.department}
                />
                {errors.department && <div className="error">{errors.department}</div>}
            </div>
            <button onClick={prevStep} className="prev__btn">prev</button>
            <button onClick={stepThreeCheck} className="next__btn">next</button>
        </>
    )
}


const StepFour = ({ handelChange, handleLogoClick, handleLogo, values, errors,handleSubmit, prevStep, isSubmitting}) => {

    return (
        <>
            <div className="nomination__logo">
                <img 
                    src={Placeholder}
                    width="200px"
                    alt="logoPlaceholder"
                    id="logoPlaceholder"
                    onClick={handleLogoClick}
                />
                <label htmlFor="logo" className="nomination__label">Upload logo</label>
                <input 
                    type="file" 
                    id="logo"
                    name="logo"
                    accept=".png, .jpg, .jpeg"
                    style={{display: "none"}}
                    onChange={handleLogo}
                />
                {errors.logo && <div className="error">{errors.logo}</div>}
            </div>
            <div className="nomination__input_box">
                <label htmlFor="party_name" className="nomination__label">Party name</label>
                <input 
                    type="text"
                    id="party_name"
                    name="party_name"
                    className="nomination__input"
                    placeholder="*****"
                    onChange={handelChange}
                    value={values.party_name}
                />
                {errors.party_name && <div className="error">{errors.party_name}</div>}
            </div>
            
            {
                isSubmitting ?  null : <button onClick={prevStep} className="prev__btn">prev</button>
            }
            <button type="submit" onClick={handleSubmit} 
            className={isSubmitting ? "first_nxtBtn" : "next__btn"} 
            style={ isSubmitting ? {width: "100%"} : {width: "48%"} }>submit</button>
            
        </>
    )
}



export default NominationForm;
