import React, { Component } from 'react';
import './MessageList.css';

export class MessageList extends Component {

    render() {
        const { messages } = this.props;

        return (
            <div>
                <ul className="message-list">
                    { messages.map(m => this.renderMessage(m)) }
                </ul>
            </div>
        )
    }

    renderMessage(message){
        const { member, text } = message;
        const { currentMember } = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
        return (
            <li className={className}>
                <span className="avatar" style={{backgroundColor: member.clientData.color}}/>
                <div className="Message-content">
                    <div className="membername">
                        {member.clientData.username}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        )
    }
}

export default MessageList
