import React, { Component } from 'react';
import Activities from './Activities';
import './Home.css';
import { AiOutlineCheckCircle, 
        AiOutlineDollar,
        AiOutlineUserAdd,
        AiOutlineGold } from 'react-icons/ai';
import AnimatedNumber from 'react-animated-number';
import homedata from './homedata';
import HomeChart from '../../charts/HomeChart';

export class Home extends Component {

    
    formatValue = value => `${parseInt(Number(value)).toLocaleString()}`;
    
    render() {

        let totalmonthlyIncome = 0;
        let totaltaskCompleted = 0;
        let totalnewEmployees = 0;
        let totalsupplies = 0;
        homedata.forEach(elem => {
            totalmonthlyIncome += elem.monthlyIncome;
            totaltaskCompleted += elem.taskCompleted;
            totalnewEmployees += elem.newEmployees;
            totalsupplies += elem.supplies;
        })
    
        return (
            <div className="home">

                {/* Four Boxes */}
                <div className="home-boxes">
                    <div className="monthlyIncome">
                        <AiOutlineDollar className="home-icons" style={{color: "#28A745"}}/>
                        <div className="home-content">
                            <span className="home-text">Monthly Income</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalmonthlyIncome} duration={2000} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="taskComplete">
                        <AiOutlineCheckCircle className="home-icons" style={{color: "#E14ECA"}}/>
                        <div className="home-content">
                            <span className="home-text">Completed Tasks</span><br/>
                            <AnimatedNumber className="home-numbers" value={totaltaskCompleted} duration={2000} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="newEmployees">
                        <AiOutlineUserAdd className="home-icons" style={{color: "#1F8EF1"}}/>
                        <div className="home-content">
                            <span className="home-text">New Employees</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalnewEmployees} duration={2000} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="supplies">
                        <AiOutlineGold className="home-icons" style={{color: "#DC3545"}}/>
                        <div className="home-content">
                            <span className="home-text">Supplies</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalsupplies} duration={2000} formatValue={this.formatValue}/>
                        </div>
                    </div>
                </div>

                {/* Home Chart */}
                <div className="home-chart">
                    <div style={{ overflowX: 'auto', overflowY: 'hidden', margin: 50}}>
                        <HomeChart width={1400} height={500}/>
                    </div>
                </div>

                {/* Activities */}
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
