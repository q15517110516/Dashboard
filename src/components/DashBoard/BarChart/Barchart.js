import React, { Component } from 'react';
import BarChart from '../../../charts/BarChart';
import './Barchart.css';


export class Barchart extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="totalPerform">
                <div className="title">Total Performaces</div>
                <div className="barchart" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                    <BarChart data={data} width={1300} height={650}/>
                </div>
            </div>
        )
    }
}

export default Barchart;
