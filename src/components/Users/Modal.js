import React, { Component } from 'react';
import './Modal.css';
import data from '../../data';

export class Modal extends Component {
    constructor (props) {
        super(props)
        
    }

    render() {

        const { visible, userselect } = this.props;
        console.log(userselect)
        return (
            
            visible &&
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-title">Personal Information</div>
                    <div className="modal-content">
                        {userselect.name}
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
