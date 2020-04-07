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
                <img className="avatar" src={"https://vignette.wikia.nocookie.net/doblaje/images/6/6d/Nick-fury-marvel-ultimate-alliance-3-the-black-order-66.6.jpg/revision/latest?cb=20190719020539&path-prefix=es"}/>
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
