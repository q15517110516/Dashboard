import React, { Component } from 'react';
import './MyLinechart.css';
import LineChart from '../../../charts/LineChart';


export class MyLinechart extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="PerformanceSheet">
                <div className="title">Performance Sheet</div>
                <div className="currentuser">
                    <img src={user.img} alt="user" style={{height: 72, width: 63, marginRight: 20}}/>
                    <span>{user.name}</span>
                </div>
                <div className="mylinechart" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                    <LineChart data={user} width={1000} height={400}/>
                </div>
                
            </div>
        )
    }
}

export default MyLinechart;
