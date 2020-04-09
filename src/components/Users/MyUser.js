import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './MyUser.css';
import { List } from 'antd';

// import Modal from './Modal';
// import data from '../../data';

export class MyUsers extends Component {
    
    constructor(){
        super();
        this.state = {
            visible: false,
        };
        // this.showModal=this.showModal.bind(this);
        // this.select=this.select.bind(this);
    };



    showModal = (visible) => {
        let select = (user) => {
            this.props.changeSelectUser(user);
            console.log(user);
        };
        this.setState({
            visible
        });
    };

    // onClick(e){
    //     var select = (user) => {
    //         this.props.changeSelectUser(user);
    //     };
    
    //     var showModal = (visible) => {
    //         this.setState({
    //             visible
    //         });
    //     };
    
    // }

    render() {

        const { data } = this.props;
        // const { visible } = this.state;
        // if(selectedUser == null){
        //     selectedUser = {
        //         name: 'null',
        //         gender: 'null',
        //         age: 'null',
        //         ID: 'null',
        //         phone: 'null',
        //         email: 'null',
        //     }
        // }

        return (
            <div>
                {/* User Profile */}
                <div className="userpro">                    
                    
                    {/* User List */} 
                        <List 
                            className="users"
                            grid={{ gutter: 10 }}
                            dataSource={data}
                            renderItem={user => (
                                <List.Item className="listitem" >
                                <div className="userbox">
                                    <div className="photo">
                                        <img src={user.img} 
                                            style={{width: 105, height: 120}} 
                                            alt="user" 
                                            onClick={() => this.showModal(true)}/>
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
                                    <div className="username">
                                        <span>{user.name}</span>
                                    </div>
                                </div>
                                    
                                </List.Item>
                            )}
                        />
                </div>  
                
            </div>
        )
    }
}

export default MyUsers
