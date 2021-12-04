import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/admin/Navbar';
import STUDENT from '../img/student.png';
import NOMINATION from '../img/nomination.png';
import VOTE from '../img/vote.png';
import '../css/AdminHome.css';
import { useDispatch, useSelector } from 'react-redux';
import { nominationLength } from '../../Redux/action/Nomination';
import { studentLength } from '../../Redux/action/Student';
import { voteLength } from '../../Redux/action/Vote';

const AdminHome = () => {

    const dispatch = useDispatch()

    const nominationLen = useSelector(state => state.nomination.nominations)
    const studentLen = useSelector(state => state.student.students)
    const voteLen = useSelector(state => state.voted.votes)


    useEffect(() => {

        dispatch(nominationLength())
        dispatch(studentLength())
        dispatch(voteLength())

    }, [dispatch])



    return (
        <>
            <Navbar />
            <div className="admin__home">
                <div className="admin__home_box">
                    <Link to="/admin/studentDetails" className="admin__home_student">
                        <div className="admin__student_icon">
                            <img src={STUDENT} alt="" />
                        </div>
                        <div className="admin__home_inner_box">
                            <h2>students</h2>
                            <h3>{studentLen.length}</h3>
                        </div>
                    </Link> 
                    <Link to="/admin/nominationList" className="admin__home_nomination">
                        <div className="admin__nomination_icon">
                            <img src={NOMINATION} alt="" />
                        </div>
                        <div className="admin__home_inner_box">
                            <h2>nomination</h2>
                            <h3>{nominationLen.length}</h3>
                        </div>
                    </Link> 
                    <Link to="/admin/votingDetails" className="admin__home_voting">
                        <div className="admin__voting_icon">
                            <img src={VOTE} alt="" />
                        </div>
                        <div className="admin__home_inner_box">
                            <h2>vote</h2>
                            <h3>{voteLen.length}</h3>
                        </div>
                    </Link> 
                </div>
            </div>
        </>
    )
}

export default AdminHome;
