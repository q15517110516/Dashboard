import React, { Component } from 'react';
import './MyLinechart.css';
import LineChart from '../../../charts/LineChart';


export class MyLinechart extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="PerformanceSheet">
                <div className="title">Performance Sheet</div>
                <div className="mylinechart" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                    <LineChart data={user} width={1000} height={400}/>
                </div>
                
            </div>
        )
    }
}

export default MyLinechart;
