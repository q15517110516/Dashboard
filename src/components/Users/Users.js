import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import SideBar from '../SideBar/SideBar';
// import './Users.css';

export class Users extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,    
        };
        
    };

    showModal = (visible) => {
        this.setState({
            visible
        });
    };
    render() {
        return (
            <div className="container">
                

                    <div className="user">
                        <div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                        </div>
                    </div>  
                
            </div>
        )
    }
}

export default Users
