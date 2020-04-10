// import React, { Component } from 'react';
// import './UserProfile.css';
// import { Modal, Button } from 'antd';

// export class UserProfile extends Component {

//     constructor(){
//         super();
//         this.state = {
//             visible: false,    
//         };
        
//     };

//     showModal = (visible) => {
//         this.setState({
//             visible
//         });
//     };

//     render() {

//         let { user } = this.props;
        
//         if (user == null){
//             user = {
//                 name: 'null',
//                 gender: 'null',
//                 age: 'null',
//             }
//         }
//         return (
//             <div id='view1' className="pane">
//                 <div className="header">User Profile</div>
//                 <div className="profile">
//                     <div className="userphoto">
//                         <img className="photo" src={user.img} aria-hidden alt="userphoto" onClick={() => this.showModal(true)}/>
                        
//                         <Modal className="modal"
//                             title="Personal Information"
//                             footer={[
//                                 <Button key="cancel" onClick={() => this.showModal(false)}>Cancel</Button>
//                             ]}
//                             centered
//                             visible={this.state.visible}
//                             onCancel={() => this.showModal(false)}>
                            
//                             <div className="personalInfo">
//                                 <p>Name: {user.name}</p>
//                                 <p>Gender: {user.gender}</p>
//                                 <p>Age: {user.age}</p>
//                                 <p>ID: {user.ID}</p>
//                                 <p>Contact Number: {user.phone}</p>
//                                 <p>Email: {user.email}</p>
//                             </div>
                            
//                         </Modal>
//                     </div>

//                     <div className="info">
//                         <div>Name: {user.name}</div>
//                         <div>Gender: {user.gender}</div>
//                         <div>Age: {user.age}</div>
//                         <div>ID: {user.ID}</div>    
//                     </div>

                
//                 </div>
                
//             </div>
//         )
//     }
// }

// export default UserProfile;

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
                                            onClick={() => {this.changeSelectUser(user); this.showModal(true);}}
                                        />
                                        
                                        <Modal className="modal"
                                            title="Personal Information"
                                            footer={[
                                                <Button key="cancel" onClick={() => this.showModal(false)}>Cancel</Button>
                                            ]}
                                            centered
                                            visible={this.state.visible}
                                            onCancel={() => this.showModal(false)}>
                                            
                                            <div className="personalInfo">
                                                <p>Name: {selectedUser.name}</p>
                                                <p>Gender: {selectedUser.gender}</p>
                                                <p>Age: {selectedUser.age}</p>
                                                <p>ID: {selectedUser.ID}</p>
                                                <p>Contact Number: {selectedUser.phone}</p>
                                                <p>Email: {selectedUser.email}</p>
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



                        .listitem {
                            display: flex;
                            flex-direction: column;
                            margin: 15px;
                            color: white;
                            text-align: center;
                        }
                        
                        .userbox {
                            border: solid 1px #1F8EF1;
                            border-radius: 5px;
                            height: 220px;
                            width: 125px;
                        }
                        
                        .photo {
                            margin-top: 10px;
                        }
                        
                        .username {
                            font: 25px sans-serif;
                            text-align: center;
                            margin-top: 15px;
                        }
                        
                        
                        /* .modal {
                            background-color: #1e1e2f;
                        } */
                        
                        .personalInfo {
                            font: 15px sans-serif;
                        }