import React,{ useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useDispatch ,useSelector } from 'react-redux';
import { nominationList } from '../Redux/action/Nomination';
import './css/NominationList.css';
import { Link } from 'react-router-dom';
import spinner  from './img/spinner.gif'

const NominationList = () => {

    const nomination = useSelector(state => state.nomination.nominations)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(nominationList())
        
    }, [dispatch])
    
    console.log(nomination);

    return (

        <>
            <Navbar />
            {
                nomination.length === 0 ? (
                    <div className="spinner">
                       <img src={spinner} alt="" />
                    </div>
                ) : (
                    <>
                        <h2 className="nomination__titles">Nomination Members</h2>
                        <div className="profile__card">
                            <div className="profile__box">
                                {
                                    nomination.map((val) => (
                                        <div className="profile__flex_box" key={val._id}>
                                            <div className="profile__img">
                                                <img src={val.profile} alt="profile" />
                                            </div>
                                            <div className="profile__name">{val.name}</div>
                                            <Link to={`/student/nomination/${val.name}/${val._id}`} className="profile__links">view details</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ) 
            }
        </>
    )
}

export default NominationList;
