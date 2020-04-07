import React, { Component } from 'react';
import './Notebook.css';
import ToDoApp from './ToDoApp';

export class Notebook extends Component {
    render() {
        return (
            
            <div className="notebook-todo">
                <div className="title">ToDo List</div>
                <div className="todoapp">
                    <ToDoApp />
                </div>
            </div>
            
        )
    }
}

export default Notebook
