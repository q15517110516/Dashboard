import React, { Component } from 'react';
import './Modal.css';
import data from '../../data';

export class Modal extends Component {
    constructor (props) {
        super(props)
        
    }

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    };

    render() {
        const { visible, userselected } = this.props;
        return (
            
            visible &&
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-title">Personal Information</div>
                    <div className="modal-content">
                        {userselected.name}
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
