import React, { Component } from 'react';
import './UserProfile.css';
import { Modal, Button } from 'antd';

export class UserProfile extends Component {

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

        let { user } = this.props;
        if (user == null){
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
            }
        }
        return (
            <div id='view1' className="pane">
                <div className="header">User Profile</div>
                <div className="profile">
                    <div className="userphoto">
                        <img className="photo" src={user.img} aria-hidden alt="userphoto" onClick={() => this.showModal(true)}/>
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

                    <div className="info">
                        <div>Name: {user.name}</div>
                        <div>Gender: {user.gender}</div>
                        <div>Age: {user.age}</div>
                        <div>ID: {user.ID}</div>    
                    </div>

                
                </div>
                
            </div>
        )
    }
}

export default UserProfile;
