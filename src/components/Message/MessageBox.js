import React, { Component } from 'react';
import './MessageBox.css';
import MessageList from './MessageList';
import Input from './Input';


export class MessageBox extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            messages: [],
            member: {
                username: "Nick Fury",
                
            }
        };
        
        this.drone = new window.Scaledrone("MgKqpgODtPk32fBK", {
            data: this.state.member,
        });
        this.drone.on('open', error => {
            if (error) {
                return console.error(error);
            }
            const member = {...this.state.member};
            member.id = this.drone.clientId;
            this.setState({
                member
            });
        });
        const room = this.drone.subscribe("observable-room");
        room.on('data', (data, member) => {
            const messages = this.state.messages;
            messages.push({member, text: data});
            this.setState({
                messages
            });
        });

            
    }

    onSendMessage = message => {
        this.drone.publish({
            room: "observable-room",
            message
        });
    }
    
    
    
    render() {

        // let { user } = this.props;
        return (
            <div className="messagebox">
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
        )
    }
}

export default MessageBox
