import React, { Component } from 'react';
import data from '../../data';
import MyUser from './MyUser';
import './Users.css';


export class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            allUser: data,
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
        const { allUser, selectUser, greaterThenAge, includedGender } = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender) !== -1)
                                    .filter(user=>user.age > greaterThenAge);

        return (
            <div className="all-users">
                <div className="title">User Profile</div>
                <div>
                    <MyUser
                        user = {allUser} 
                        selectedUser={selectUser}
                        data={filteredData} 
                        changeSelectUser={this.changeSelectUser}                  
                    />
                </div>
            </div>
        )
    }
}

export default Users
