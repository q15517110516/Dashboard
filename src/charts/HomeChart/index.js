import React, { Component } from 'react';
import draw from './vis';

export class HomeChart extends Component {

    componentDidMount(){
        draw(this.props);
    }

    componentDidUpdate(){
        draw(this.props);
    }
    render() {
        return (
            <div className="vis-homechart" />
        )
    }
}

export default HomeChart