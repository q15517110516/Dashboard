import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './MyUser.css';
import data from '../../data';
import "antd/dist/antd.css";

export class MyUsers extends Component {
    
    constructor(){
        super();
        this.state = {
            visible: false,
            selectUser: data[0],
        };
    };

    changeSelectUser = (user) => {
        this.setState({
            selectUser: user
        });
    };
    showModal = (visible) => {
        this.setState({
            visible
        });
    };

    render() {

        const { selectUser } = this.state;
        const { user } = this.props;


        return (
            <div>
                {/* User Profile */}
                <div className="userpro">                    
                    
                    {/* User List */} 
                    <div className="users">
                        
                        {/* User Box */}
                        {user.map(user => (
                        <div className="userbox" key={user.code}>
                            <div className="userphoto">

                                {/* Image */}
                                <img className="photo" 
                                    src={user.img} 
                                    aria-hidden 
                                    alt="userphoto" 
                                    onClick={() => {this.changeSelectUser(user); this.showModal(true);}}/>
                            </div>

                            {/* User Name */}
                            <div className="username">
                                {user.name}
                            </div>
                        </div>
                        ))}

                        {/* Click to display users info */}
                        <Modal
                            title="Personal Information"
                            centered
                            visible={this.state.visible}
                            onCancel={() => this.showModal(false)}
                            footer={[
                                <Button key="cancel" onClick={() => this.showModal(false)}>Cancel</Button>
                            ]}
                            >
                            
                            <div className="personalInfo">
                                <p>Name: {selectUser.name}</p>
                                <p>Gender: {selectUser.gender}</p>
                                <p>Age: {selectUser.age}</p>
                                <p>ID: {selectUser.ID}</p>
                                <p>Contact Number: {selectUser.phone}</p>
                                <p>Email: {selectUser.email}</p>
                            </div>
                        </Modal>

                    </div>
                
                </div>  
                
            </div>
        )
    }
}

export default MyUsers
