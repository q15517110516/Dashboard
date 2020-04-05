import React, { Component } from 'react';
import MyPiechart from './MyPiechart';
import Filter from './Filter';
import data from '../../../data';
import './Piechart.css';


export class Piechart extends Component {
    constructor(props){
        super(props);
        this.state={
            selectUser: data[0],
            includedGender: ['Male', 'Female', 'Unknown'],
            greaterThenAge: 0,
            
        }
    };

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        });
    };
    
    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        });
    };

    render() {
        const {greaterThenAge, includedGender} = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender) !== -1)
                                .filter(user=>user.age > greaterThenAge);

        return (
            <div className="piechart">
                <div className="my-piechart">
                    <MyPiechart data={filteredData}/>
                </div>
                <div className="filter">
                    <Filter changeGreaterThenAge={this.changeGreaterThenAge}
                            changeIncludedGender={this.changeIncludedGender}/>
                </div>
            </div>
        )
    }
}

export default Piechart
