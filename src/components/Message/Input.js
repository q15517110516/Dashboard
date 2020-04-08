import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {
    constructor (props) {
        super(props);
        this.state={
            text: "",
        };
        
    }

    onChange(e){
        this.setState({
            text: e.target.value,
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            text: "",
        });
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div className="input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <textarea onChange={e => this.onChange(e)}
                        value={this.state.text}
                        style={{resize: "none"}}
                        placeholder="Enter your message and press ENTER"
                    />
                    <button>Send</button>
                </form>
                
            </div>
        )
    }
}

export default Input
