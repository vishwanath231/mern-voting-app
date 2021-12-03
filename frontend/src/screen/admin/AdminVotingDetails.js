import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteList } from '../../Redux/action/Vote';
import Navbar from '../../components/admin/Navbar';


const AdminVotingDetails = () => {

    const dispatch = useDispatch()

    const voteDet = useSelector(state => state.voted.votes)

    
    useEffect(() => {
        
        dispatch(voteList())
        
    }, [dispatch])

    return (
        <>
            <Navbar />
            {
                voteDet.map((val) => (
                    <p>{val.email}</p>
                ))
            }
        </>
    )
}

export default AdminVotingDetails
