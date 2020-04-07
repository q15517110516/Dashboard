import React, { Component } from 'react';
import './Message.css';
import MessageBox from './MessageBox';

export class Message extends Component {


    render() {
        return (
            <div className="message">
                <div className="title">Message</div>
                <div className="messagebody">
                    <MessageBox/>
                </div>
            </div>
            
        )
    }
}

export default Message
