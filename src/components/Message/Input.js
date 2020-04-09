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


    submitOnEnter(e){
        if(e.which === 13 && !e.shiftKey){
            e.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
            e.preventDefault();
        }
    }

    render() {
        
        return (
            <div>
                <form className="input" onSubmit={e => this.onSubmit(e)}>
                    <textarea className="inputbox" onChange={e => this.onChange(e)}
                        value={this.state.text}
                        style={{resize: "none"}}
                        placeholder="Enter your message and press ENTER"
                        onKeyDown={this.submitOnEnter}
                        
                    />
                    <button className="sendbtn" >Send</button>
                </form>
                
            </div>
        )
    }
}

export default Input
