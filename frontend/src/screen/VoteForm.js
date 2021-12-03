import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import useVoteForm from '../hooks/vote/useVoteForm';
import './css/Vote.css';


const VoteForm = () => {


    const { email, register, handleSubmit, setSelected, nomination, isCheck, registerErr, emailErr, success } = useVoteForm();
    
    

    return (
        <>
            <Navbar />

            <div className="vote__container">
                <div className="vote__box">
                    <div className="vote__title">Vote Form</div>
                    {registerErr && <div className="errorBox">{registerErr}</div>}
                    {emailErr && <div className="errorBox">{emailErr}</div>}
                    {success && <div className="successBox">{success}</div>}
                    <form className="vote_form" onSubmit={handleSubmit}>
                        <div className="vote__input_box">
                            <label htmlFor="register_no" className="vote__label">Register No</label>
                            <input 
                                type="text" 
                                className="vote__input"
                                value={register}
                                name="register_no"
                                id="register_no"
                                disabled
                            />
                        </div>
                        <div className="vote__input_box">
                            <label htmlFor="email" className="vote__label">Email</label>
                            <input 
                                type="text" 
                                className="vote__input"
                                value={email}
                                name="email"
                                id="email"
                                disabled
                            />
                        </div>
                        <div className="vote__input_box">
                            <label htmlFor="vote_name" className="vote__label">Vote Name</label>
                            <select name="vote" onChange={e => setSelected(e.target.value)} className="vote__input">
                                <option value="">select vote</option>
                                {nomination.map((val) => (
                                    <option value={val.party_name} key={val._id}>{val.party_name}</option>
                                ))}
                            </select>
                            {isCheck && <div className="error">{isCheck}</div>}
                        </div>
                        <button type="submit" className="vote__btn">Vote</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VoteForm;
