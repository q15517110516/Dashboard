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

    select = (selectedUser) => {
        this.props.changeSelectUser(selectedUser);
    };

    showModal = (visible) => {
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

        const { data, user, selectedUser } = this.props;
        // const { visible } = this.state;
        console.log(selectedUser)
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
                            grid={{ gutter: 16, }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item className="listitem">
                                <div className="userbox">
                                    <div className="photo">
                                        <img src={item.img} style={{width: 105, height: 120}} alt="user"/>
                                    </div>
                                    <div className="username">
                                        <span>{item.name}</span>
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
