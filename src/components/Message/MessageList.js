import React, { Component } from 'react';
import './MessageList.css';

export class MessageList extends Component {

    render() {
        const { messages } = this.props;

        return (
            <div>
                <ul className="message-list">
                    { messages.map((m, i) => this.renderMessage(m, i)) }
                </ul>
            </div>
        )
    }

    renderMessage(message, i){
        const { member, text } = message;
        const { currentMember } = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
        return (
            <li className={className} key={i}>
                <img className="avatar" src={member.img}/>
                <div className="Message-content">
                    <div className="membername">
                        {member.username}
                        {/* {member.clientData.username} */}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        )
    }
}

export default MessageList
