import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../../Redux/action/Student';
import Navbar from '../../components/admin/Navbar';

const AdminStudentDetails = () => {

    const dispatch = useDispatch()

    const studentDet = useSelector(state => state.student.students)

    
    useEffect(() => {
        
        dispatch(studentDetails())
        
    }, [dispatch])
    
    return (
        <>
            <Navbar />
            {
                studentDet.map((val) => (
                    <p>{val.username}</p>
                ))
            }
        </>
    )
}

export default AdminStudentDetails;
