import React, { Component } from 'react';
import data from '../../data';
import MyUser from './MyUser';
import './Users.css';


export class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedUser: data,
            selectUser: data[0],
            
        }
    };

    changeSelectUser = value => {
        this.setState({
            selectUser: value
        });
    };

    render() {
        const { selectedUser } = this.state;
        return (
            <div className="comp-users">
                <MyUser
                    user = {selectedUser}
                    changeSelectUser={this.changeSelectUser}                   
                />
            </div>
        )
    }
}

export default Users
