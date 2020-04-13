import React, { Component } from 'react';
import Activities from './Activities';
import './Home.css';
import { AiOutlineCheckCircle, 
        AiOutlineDollar,
        AiOutlineUserAdd,
        AiOutlineGold } from 'react-icons/ai';
import AnimatedNumber from 'react-animated-number';
import { taskCompleted, 
        newEmployees, 
        supplies, 
        monthlyIncome } from './homedata';

export class Home extends Component {

    
    formatValue = value => `${parseInt(Number(value)).toLocaleString()}`;
    
    render() {

        let totalmonthlyIncome = 0;
        monthlyIncome.forEach(elem => {
            totalmonthlyIncome += elem.value;
            
        });
        let totaltaskCompleted = 0;
        taskCompleted.forEach(elem => {
            totaltaskCompleted += elem.value;
            
        });
        let totalnewEmployees = 0;
        newEmployees.forEach(elem => {
            totalnewEmployees += elem.value;
            
        });
        let totalsupplies = 0;
        supplies.forEach(elem => {
            totalsupplies += elem.value;
            
        });
        

        return (
            <div className="home">

                {/* Four Boxes */}
                <div className="home-boxes">
                    <div className="monthlyIncome">
                        <AiOutlineDollar className="home-icons" style={{color: "#28A745"}}/>
                        <div className="home-content">
                            <span className="home-text">Monthly Income</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalmonthlyIncome} duration={1500} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="taskComplete">
                        <AiOutlineCheckCircle className="home-icons" style={{color: "#E14ECA"}}/>
                        <div className="home-content">
                            <span className="home-text">Completed Tasks</span><br/>
                            <AnimatedNumber className="home-numbers" value={totaltaskCompleted} duration={1500} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="newEmployees">
                        <AiOutlineUserAdd className="home-icons" style={{color: "#1F8EF1"}}/>
                        <div className="home-content">
                            <span className="home-text">New Employees</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalnewEmployees} duration={1500} formatValue={this.formatValue}/>
                        </div>
                    </div>
                    <div className="supplies">
                        <AiOutlineGold className="home-icons" style={{color: "#DC3545"}}/>
                        <div className="home-content">
                            <span className="home-text">Supplies</span><br/>
                            <AnimatedNumber className="home-numbers" value={totalsupplies} duration={1500} formatValue={this.formatValue}/>
                        </div>
                    </div>
                </div>

                {/* Home Chart */}
                <div className="home-chart">
                    <div >
                    
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
