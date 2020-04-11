import React, { Component } from 'react';
import Activities from './Activities';
import './Home.css';
import { AiOutlineCheckCircle, 
        AiOutlineDollar,
        AiOutlineUserAdd, } from 'react-icons/ai';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-boxes">
                    <div className="totalIncome">
                        <AiOutlineCheckCircle className="home-icons"/>
                        <div>
                        
                        </div>
                    </div>
                    <div className="taskComplete">
                        <AiOutlineDollar className="home-icons"/>
                        <div>
                        
                        </div>
                    </div>
                    <div className="newEmployees">
                        <AiOutlineUserAdd className="home-icons"/>
                        <div>
                        
                        </div>
                    </div>

                </div>
                <div className="home-activities">
                    <div className="title">Activities</div>
                    <div className="activities">
                        <Activities />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
