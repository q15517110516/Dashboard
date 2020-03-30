import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './Users.css';
import data from '../../data';

export class Users extends Component {
    constructor(props){
        super(props);
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
        let { user } = this.props;
        console.log(this.props.data);
        if(user == null){
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
                ID: 'null',
                phone: 'null',
                email: 'null',
            }
        }

        return (
            <div>
                {/* User Profile */}
                <div className="userpro">
                    {/* Title */}
                    <div className="title">
                        User Profile
                    </div>

                    {/* User List */}
                    <div className="users">
                        {/* User Box */}
                        <div className="userbox">
                            <div className="userphoto">

                                {/* Image */}
                                <img className="photo" src={user.img} aria-hidden alt="userphoto" onClick={() => this.showModal(true)}/>
                                
                                {/* Click to display users info */}
                                <Modal className="modal"
                                    title="Personal Information"
                                    footer={[
                                        <Button key="cancel" onClick={() => this.showModal(false)}>Cancel</Button>
                                    ]}
                                    centered
                                    visible={this.state.visible}
                                    onCancel={() => this.showModal(false)}>
                                
                                    <div className="personalInfo">
                                        <p>Name: {user.name}</p>
                                        <p>Gender: {user.gender}</p>
                                        <p>Age: {user.age}</p>
                                        <p>ID: {user.ID}</p>
                                        <p>Contact Number: {user.phone}</p>
                                        <p>Email: {user.email}</p>
                                    </div>
                                
                                </Modal>
                            </div>

                            {/* User Name */}
                            <div className="username">
                            </div>
                            
                        </div>

                        
                        
                    </div>
                </div>  
                
            </div>
        )
    }
}

export default Users
