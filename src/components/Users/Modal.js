import React, { Component } from 'react';
import './Modal.css';
import data from '../../data';

export class Modal extends Component {
    constructor(){
        super();

    }

    select = (user) =>{
        this.props.changeSelectUser(user);
    }

    render() {

        const { visible, user } = this.props;

        // console.log(user.name)
        return (
            visible &&
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-title">Personal Information</div>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-operator">
                        <button className="modal-operator-close">Close</button>
                    </div>
                </div>
                <div className="mask"></div>
            </div>
        )
    }
}

export default Modal
