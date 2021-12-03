import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nominationDetails } from '../../Redux/action/Nomination';
import Navbar from '../../components/admin/Navbar';

const AdminNominationDetails = () => {


    const dispatch = useDispatch()

    const nominationDet = useSelector(state => state.nomination.nominations)

    
    useEffect(() => {
        
        dispatch(nominationDetails())
        
    }, [dispatch])

    return (
        <>
            <Navbar />
            {
                nominationDet.map((val) => (
                    <p>{val.name}</p>
                ))
            }
        </>
    )
}

export default AdminNominationDetails;
