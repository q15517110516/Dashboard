import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Barchart from './components/DashBoard/BarChart/Barchart';
import Linechart from './components/DashBoard/LineChart/LineChart';
import Piechart from './components/DashBoard/PieChart/Piechart';
import Home from './components/Home/Home';
import Message from './components/Message/Message';
import Notebook from './components/Notebook/Notebook';
import Users from './components/Users/Users';
import SideBar from './components/SideBar/SideBar';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="sider">
                    <SideBar/> 
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/Users" component={Users}/>
                        <Route path = "/Message" component={Message}/>
                        <Route path = "/Notebook" component={Notebook}/>
                        <Route path = "/Dashboard/Linechart" component={Linechart}/>
                        <Route path = "/Dashboard/Barchart" component={Barchart}/>
                        <Route path = "/Dashboard/Piechart" component={Piechart}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
