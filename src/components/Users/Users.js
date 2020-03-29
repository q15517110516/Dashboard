import React, { Component } from 'react';
import { Modal, Button } from 'antd';

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
            <div>
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
