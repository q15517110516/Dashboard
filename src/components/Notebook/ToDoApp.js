import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import './ToDoApp.css';

export class ToDoApp extends Component {

    constructor (props) {
        super(props);
        this.state={
            items: [
                
            ],
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }


    addItem(e){
        if(this.inputElement.value !== ""){
            var newItem = {
                text: this.inputElement.value,
                key: Date.now(),
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(item => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    
    render() {
        return (
            <div className="todolist">
                <div className="todoinput">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a} placeholder="Add TODO"></input>
                        <button type="submit">ADD</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items} delete={this.deleteItem}/>
                
            </div>
        )
    }
}

export default ToDoApp
