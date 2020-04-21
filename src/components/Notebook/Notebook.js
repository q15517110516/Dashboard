import React, { Component } from 'react';
import './Notebook.css';
import ToDoApp from './ToDoApp';
import Task from './Task';


export class Notebook extends Component {
    render() {
        return (
            <div className="notebook">
                <div className="notebook-todo">
                    <div className="title">ToDo List</div>
                    <div className="todoapp">
                        <ToDoApp />
                    </div>
                </div>
                <div className="notebook-taskCompleted">
                    <div className="title">Completed Task</div>
                    <div className="task">
                        <Task />
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Notebook
