import React, { Component } from 'react';
import './MessageBox.css';
import MessageList from './MessageList';
import Input from './Input';
import data from '../../data';



export class MessageBox extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            messages: [],
            member: {
                username: "Nick Fury",
                icon: "https://vignette.wikia.nocookie.net/doblaje/images/6/6d/Nick-fury-marvel-ultimate-alliance-3-the-black-order-66.6.jpg/revision/latest?cb=20190719020539&path-prefix=es"
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
                <MessageList 
                    messages={this.state.messages}
                    currentMember={this.state.member}
                />
                <Input onSendMessage={this.onSendMessage}/>        
            </div>
        )
    }
}

export default MessageBox
