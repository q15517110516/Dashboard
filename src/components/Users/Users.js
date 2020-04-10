import React, { Component } from 'react';
import data from '../../data';
import MyUser from './MyUser';
import './Users.css';


export class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            allUser: data,
            includedGender: ['Male', 'Female', 'Unknown'],
            greaterThenAge: 0,
        }
    };

    render() {
        const { allUser } = this.state;
        
        return (
            <div className="all-users">
                <div className="title">User Profile</div>
                <div>
                    <MyUser
                        user={allUser}              
                    />
                </div>
            </div>
        )
    }
}

export default Users
