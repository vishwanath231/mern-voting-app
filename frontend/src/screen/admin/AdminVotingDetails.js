import React,{useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteList } from '../../Redux/action/Vote';
import Navbar from '../../components/admin/Navbar';
import '../css/AdminVotingDetails.css';


const AdminVotingDetails = () => {

    const [searchVal, setSearchVal] = useState('');
    const [filterData, setFilterData] = useState('');

    const dispatch = useDispatch()

    const voteDet = useSelector(state => state.voted.votes)

    
    useEffect(() => {
        
        dispatch(voteList())

        
    }, [dispatch, voteDet])


    const searchHandle = (val) => {

        setSearchVal(val);

        if (searchVal !== "") {
            
            const filterList = voteDet.filter((value) => {
                return Object.values(value).join('').toLowerCase().includes(searchVal.toLowerCase())
            }) 

            setFilterData(filterList);

        }
    }


    return (
        <>
            <Navbar />
            
            <div className="voting__details_container">
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

                            <div className="voting__details_box">
                                {
                                    filterData.map((val) => (
                                        <div className="voting__details" key={val._id}>
                                            <div className="voting__register"><span>Register No: </span>{val.register_no}</div>
                                            <div className="voting__name"><span>Voted: </span>{val.voted}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (

                            <div className="voting__details_box">
                                {
                                    voteDet.map((val) => (
                                        <div className="voting__details" key={val._id}>
                                            <div className="voting__register"><span>Register No: </span>{val.register_no}</div>
                                            <div className="voting__name"><span>Voted: </span>{val.voted}</div>
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







export default AdminVotingDetails

