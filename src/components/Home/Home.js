import React, { Component } from 'react';
import Activities from './Activities';
import './Home.css';
import { AiOutlineCheckCircle, 
        AiOutlineDollar,
        AiOutlineUserAdd,
        AiOutlineGold } from 'react-icons/ai';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-boxes">
                    <div className="monthlyIncome">
                        <AiOutlineDollar className="home-icons" style={{color: "#28A745"}}/>
                        <div className="home-content">
                            <span className="home-text">Monthly Income</span><br/>
                            <span className="home-numbers">3.26M</span>
                        </div>
                    </div>
                    <div className="taskComplete">
                        <AiOutlineCheckCircle className="home-icons" style={{color: "#E14ECA"}}/>
                        <div className="home-content">
                            <span className="home-text">Completed Tasks</span><br/>
                            <span className="home-numbers">3,756</span>
                        </div>
                    </div>
                    <div className="newEmployees">
                        <AiOutlineUserAdd className="home-icons" style={{color: "#1F8EF1"}}/>
                        <div className="home-content">
                            <span className="home-text">New Employees</span><br/>
                            <span className="home-numbers">4,632</span>
                        </div>
                    </div>
                    <div className="supplies">
                        <AiOutlineGold className="home-icons" style={{color: "#DC3545"}}/>
                        <div className="home-content">
                            <span className="home-text">Supplies</span><br/>
                            <span className="home-numbers">23,546</span>
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
