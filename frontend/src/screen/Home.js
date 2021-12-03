import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './css/Home.css';
import Styled from 'styled-components';

const Home = () => {
    return (
        <>
            <Navbar />
            <img src="img/bg1.jpg" alt="" className="header__bg" />
            <div className="home__card">
                <div className="home__card_box">
                    <div className="home__card_grid">
                        <One>
                            <Link to="/vote" className="page__link">Voting</Link>
                        </One>
                        <Two>
                            <Link to="/nomination" className="page__link">Nomination Register</Link>
                        </Two>
                        <Three>
                            <Link to="/nominationList" className="page__link">Nomination Members</Link>
                        </Three>
                    </div>
                </div>
            </div> 

        </>
    )
}


export default Home;


const One = Styled.div `
    background: url('img/one.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    height:200px;  
    width:100%;
    position: relative;
    z-index: 1;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        border-radius: 10px;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .page__link {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
       background: #1d3557;
        color: #fff;
        padding: .8rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 3px;
        text-decoration: none;
        
    }
`;



const Two = Styled.div `
    background: url('img/two.jpg');
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height:200px;  
    width:100%;
    position: relative;
    z-index: 1;



    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .page__link {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
       background: #1d3557;
        color: #fff;
        padding: .8rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 3px;
        text-decoration: none;
    }
`;



const Three = Styled.div `
    background: url('img/three.jpg');
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height:200px;  
    width:100%;
    position: relative;
    z-index: 1;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .page__link {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background: #1d3557;
        color: #fff;
        padding: .8rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 3px;
        text-decoration: none;
    }
`;