import React, { Component } from 'react';
import draw from './vis';

export class ScatterPlot extends Component {

    componentDidMount(){
        draw(this.props);
    }
    
    componentDidUpdate(){
        draw(this.props);
    }

    render() {
        return (
            <div className="vis-scatterplot"/>
        )
    }
}

export default ScatterPlot;
