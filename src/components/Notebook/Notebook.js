import React, { Component } from 'react';
import './Notebook.css';
import ToDo from './ToDoApp';

export class Notebook extends Component {
    render() {
        return (
            <div className="notebook">
                <div className="title">Notebook</div>
                <div>
                    <ToDo/>
                </div>
            </div>
        )
    }
}

export default Notebook
