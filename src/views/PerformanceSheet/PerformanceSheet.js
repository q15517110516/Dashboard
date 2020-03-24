import React, { Component } from 'react';
import './PerformanceSheet.css';
import LineChart from '../../charts/LineChart';

export class PerformanceSheet extends Component {
    render() {
        const {user} = this.props;
        return (
            <div id="view4" className="pane">
                <div className="header">Performance Sheet</div>
                <div style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                    <LineChart data={user} width={1100} height={250}/>
                </div>
                
            </div>
        )
    }
}

export default PerformanceSheet;
