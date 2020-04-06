import React, { Component } from 'react';
import './ToDoItems.css';
import { AiOutlineClose } from 'react-icons/ai';
import FlipMove from 'react-flip-move';

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
            <div key={item.key}>
                <li className="item-list">
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
                    <FlipMove duration={250} easing="ease-out">
                        {listItems}                
                    </FlipMove>
                    
                </ul>
            </div>
        )
    }
}

export default ToDoItems
