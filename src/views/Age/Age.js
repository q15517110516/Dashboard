import React, { Component } from 'react';
import './Age.css';
import '../../charts/BarChart';
import BarChart from '../../charts/BarChart';

export class Age extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id="view5" className="pane">
                <div className="header">Age</div>
                <div style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                    <BarChart data={data} width={1000} height={550}/>
                </div>
                
            </div>
        )
    }
}

export default Age;
