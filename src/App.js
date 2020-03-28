import React, { Component } from 'react';
import Main from './Main';
import Router from './Router';


class App extends Component {
    render() {
        return (
            <div>
                <Main/>
                <Router/>
            </div>
        )
    }
}

export default App;
