import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './MyUser.css';
// import Modal from './Modal';
// import data from '../../data';

export class MyUsers extends Component {
    
    constructor(){
        super();
        this.state = {
            visible: false, 

        };
        
    };

    showModal = (visible) => {
        this.setState({
            visible: true,
        });
    };

    render() {

        let { user } = this.props;
        // const { visible } = this.state;

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
                    <div className="title">User Profile</div>
                    
                    {/* User List */} 
                    <div className="users">
                        
                        {/* User Box */}
                        {user.map(user => ( 
                        <div className="userbox" key={user.code}>
                            <div className="userphoto">

                                {/* Image */}
                                <img className="photo" src={user.img} aria-hidden alt="userphoto" onClick={() => this.showModal()}/>
                                {/* Click to display users info */}
                                
                                {/*<Modal visible={visible} user={this.changeSelect} />*/}
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
                                {user.name}
                            </div>
                            
                        </div>
                        ))}

                    </div>
                
                </div>  
                
            </div>
        )
    }
}

export default MyUsers
