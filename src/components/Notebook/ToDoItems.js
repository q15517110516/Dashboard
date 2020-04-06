import React, { Component } from 'react';
import './ToDoItems.css';
import { AiOutlineClose } from 'react-icons/ai';

export class ToDoItems extends Component {
    constructor (props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }
    
    createTasks(item){
        return (
            <div className="item-list" key={item.key}>
                <li>
                <span>{item.text}</span>
                <AiOutlineClose className="delete" onClick={() => this.delete(item.key)}/>
                </li>
            </div>
            
        )
    }
    render() {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <ul className="items">
                    {listItems}
                    
                </ul>
            </div>
        )
    }
}

export default ToDoItems
