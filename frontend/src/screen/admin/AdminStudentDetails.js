import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../../Redux/action/Student';
import Navbar from '../../components/admin/Navbar';
import '../css/AdminStudentDetails.css';

const AdminStudentDetails = () => {

    const [searchVal, setSearchVal] = useState('');
    const [filterData, setFilterData] = useState('');


    const dispatch = useDispatch()

    const studentDet = useSelector(state => state.student.students)

    
    useEffect(() => {
        
        dispatch(studentDetails())
        
    }, [dispatch])


    const searchHandle = (val) => {

        setSearchVal(val);

        if (searchVal !== "") {
            
            const filterList = studentDet.filter((value) => {
                return Object.values(value).join('').toLowerCase().includes(searchVal.toLowerCase())
            }) 

            setFilterData(filterList);

        }
    }


    
    return (
        <>
            <Navbar />

            <div className="student__details_container">
                <div className="search__box">
                    <input 
                        type="text" 
                        placeholder="Search students....."
                        className="search__input" 
                        onChange={e => searchHandle(e.target.value)} 
                    />
                </div>
                <>

                    {
                        searchVal.length > 1 ? (

                            <div className="student__details_box">
                                {
                                    filterData.map((val) => (
                                        <div className="student__details" key={val._id}>
                                            <div className="student__register"><span>Register No: </span>{val.register_no}</div>
                                            <div className="student__name"><span>Name: </span>{val.username}</div>
                                            <div className="student__email"><span>Email: </span>{val.email}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (

                            <div className="student__details_box">
                                {
                                    studentDet.map((val) => (
                                        <div className="student__details" key={val._id}>
                                            <div className="student__register"><span>Register No: </span>{val.register_no}</div>
                                            <div className="student__name"><span>Name: </span>{val.username}</div>
                                            <div className="student__email"><span>Email: </span>{val.email}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </>
            </div>
        </>
    )
}

export default AdminStudentDetails;
