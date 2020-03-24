import React, { Component } from 'react';
import draw from './vis';

export class MyChart extends Component {

    componentDidMount(){
        draw(this.props);
    }

    componentDidUpdate(){
        draw(this.props);
    }
    render() {
        return (
            <div className="vis-mychart" />
        )
    }
}

export default MyChart