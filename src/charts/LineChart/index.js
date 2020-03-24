import React, { Component } from 'react';
import draw from './linechart';

export class LineChart extends Component {

    componentDidMount(){
        draw(this.props);
    }

    componentDidUpdate(preProps){
        draw(this.props);
    }
    render() {
        return (
            <div className="linechart" />
        )
    }
}

export default LineChart