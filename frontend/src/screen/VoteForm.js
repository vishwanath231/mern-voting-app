import React,{ useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { useDispatch ,useSelector } from 'react-redux';
import { nominationList } from '../Redux/action/Nomination';

const VoteForm = () => {
    
    const [selected, setSelected] = useState("");

    const nomination = useSelector(state => state.nomination.nominations)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(nominationList())
        
    }, [dispatch])

    const email = JSON.parse(localStorage.getItem('userInfo'))
    const register = JSON.parse(localStorage.getItem('userRegister'))


    const handleSubmit = (e) => {
        e.preventDefault()

        
    }



    return (
        <>
            <Navbar />

            <div className="vote__container">
                <div className="vote__title">Vote Form</div>
                <form className="vote_form" onSubmit={handleSubmit}>
                    <div className="vote__div">
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
                    <div className="vote__div">
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
                    <div className="vote__div">
                        <label htmlFor="vote_name" className="vote__label">Vote Name</label>
                        <select name="vote" >
                            <option value="">select vote</option>
                            {nomination.map((val) => (
                                <option value={val.party_name} key={val._id}>{val.party_name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Vote</button>
                </form>
            </div>
        </>
    )
}

export default VoteForm;
