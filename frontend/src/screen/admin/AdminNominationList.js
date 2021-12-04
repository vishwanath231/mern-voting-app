import React,{ useEffect } from 'react';
import Navbar from '../../components/admin/Navbar';
import '../css/NominationList.css';
import { useDispatch ,useSelector } from 'react-redux';
import { nominationList } from '../../Redux/action/Nomination';
import { Link } from 'react-router-dom';
import spinner  from '../img/spinner.gif'

const AdminNominationList = () => {


    const nomination = useSelector(state => state.nomination.nominations)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(nominationList())
        
    }, [dispatch])

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
                                            <Link to={`/admin/nominationDetails/${val.name}/${val._id}`} className="profile__links">view details</Link>
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

export default AdminNominationList;
