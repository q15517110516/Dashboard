import React, { Component } from 'react';
import './MessageBox.css';
import MessageList from './MessageList';
import Input from './Input';
import data from '../../data';
import { List } from 'antd';



export class MessageBox extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                {
                    text: "Secretary",
                    member: {
                        img: "https://vignette.wikia.nocookie.net/doblaje/images/3/30/Captain-america-steve-rogers-marvel-ultimate-alliance-3-the-black-order-46.5.jpg/revision/latest?cb=20190615130559&path-prefix=es",
                        username: "Captain America",
                        id: 1,
                    }
                }
            ],
            member: {
                username: "Nick Fury",
                img: "https://vignette.wikia.nocookie.net/doblaje/images/6/6d/Nick-fury-marvel-ultimate-alliance-3-the-black-order-66.6.jpg/revision/latest?cb=20190719020539&path-prefix=es",
                id: 2,
            }
        };
        
        // Using Scaledrone to hook it up

        // Connect with Channel ID
        // Instantiate a new instance of Scaledrone

        // this.drone = new window.Scaledrone("MgKqpgODtPk32fBK", {
        //     data: this.state.member,
        // });
        // this.drone.on('open', error => {
        //     if (error) {
        //         return console.error(error);
        //     }
        //     const member = {...this.state.member};
        //     member.id = this.drone.clientId;
        //     this.setState({
        //         member
        //     });
        // });

        // Connect to a Room
        // const room = this.drone.subscribe("observable-room");
        
        // Subscribe to the "data" event on the room to know when the message arrives
        // room.on('data', (data, member) => {
        //     const messages = this.state.messages;
        //     messages.push({member, text: data});
        //     this.setState({
        //         messages
        //     });
        // });

            
    }

    onSendMessage = message => {
        
        // When getting new messages, add the message as well as the client data to the our state
        // this.drone.publish({
        //     room: "observable-room",
        //     message
        // });
        const messages = this.state.messages;
        messages.push({
            text: message,
            member: this.state.member
        });
        this.setState({
            messages: messages,
        });
    };
    
    render() {

        
        // let { user } = this.props;
        return (
            <div className="messagebox">
                <div className="chatlist">
                    <List
                    size="large"
                    dataSource={data}
                    renderItem={user => 
                        <List.Item className="chatuser">
                            <div className="chatuserphoto">
                                <img src={user.img} style={{ width: 55, height: 60 }}/>
                            </div>
                            <div className="chatusername">
                                {user.name}
                            </div>
                        </List.Item>}
                    />
                </div>
            
                <div className="chatbox">
                    <div className="messageList">
                        <MessageList 
                            messages={this.state.messages}
                            currentMember={this.state.member}
                        />
                    </div>
                    <div className="messageinput">
                        <Input onSendMessage={this.onSendMessage}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MessageBox
