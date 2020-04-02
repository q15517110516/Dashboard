import React, { Component } from 'react';
import data from '../../../data';
import MyLinechart from './MyLinechart';
import UserList from './UserList';
import './Linechart.css';


export class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            selectUser: data[0],
            includedGender: ['Male', 'Female', 'Unknown'],
            greaterThenAge: 0,
            
        }
    };

    changeSelectUser = value => {
        this.setState({
            selectUser: value
        });
    };

    render() {
        const { selectUser, greaterThenAge, includedGender } = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender) !== -1)
                                    .filter(user=>user.age > greaterThenAge);

        return (
            <div className="dash-Linechart">
                <div>
                    <MyLinechart className="my-linechart" user={selectUser}/>
                </div>
                <div>
                    <UserList className="userlist" data={filteredData} changeSelectUser={this.changeSelectUser}/>
                </div>
                
            </div>
        )
    }
}

export default Users
