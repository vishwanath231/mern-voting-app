import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { nominationDetails } from '../Redux/action/Nomination';
import Navbar from '../components/Navbar/Navbar';
import './css/NominationDetails.css';

const NominationDetails = () => {

    const nominationDetail = useSelector(state => state.nominationDetail.nominationDetails)

    const dispatch = useDispatch()

    const { id } = useParams()
    
    useEffect(() => {
        
        dispatch(nominationDetails(id))
        
    }, [dispatch, id])


    const { profile, name, email, dob, mobile_no, register_no, department, logo, party_name } = nominationDetail

    return (
        <>
            <Navbar />
            <div className="nomination__details_title">{name}</div>
            <div className="nomination__details_card">
                <div className="nomination__details_box">
                    <div className="nomination__details_grid">
                        <div className="nomination__person_details">
                            <div className="header__title">Person Details</div>
                            <div className="noimation_profile">
                                <img src={profile} alt="" />
                            <p>profile</p>
                            </div>
                            <div className="nomination__name"><span>Name: </span>{name}</div>
                            <div className="nomination__email"><span>Email: </span>{email}</div>
                            <div className="nomination__dob"><span>D.O.B: </span>{dob}</div>
                            <div className="nomination__mobile"><span>Mobile Number: </span>{mobile_no}</div>
                        </div>
                        <div className="nomination__college_details">
                            <div className="header__title">College Details</div>
                            <div className="nomination__register"><span>Register Number: </span>{register_no}</div>
                            <div className="nomination__dept"><span>Department: </span>{department}</div>
                        </div>
                        <div className="nomination__details">
                            <div className="header__title">Nomination Details</div>
                            <div className="noimation_logo">
                                <img src={logo} alt="" />
                            <p>logo</p>
                            </div>
                            <div className="nomination__party_name"><span>Party Name: </span>{party_name}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default NominationDetails;
