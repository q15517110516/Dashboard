import React, { Component } from 'react';
import PieChart from '../../../charts/PieChart';
import './MyPiechart.css';


export class MyPiechart extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="gender">
                <div className="title">Gender</div>
                <div className="mypiechart">
                    <PieChart data={data} width={600} height={600} />
                </div>
                
            </div>
        )
    }
}

export default MyPiechart
