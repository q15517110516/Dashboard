import React from 'react';
import Barchart from './components/DashBoard/BarChart/Barchart';
import Linechart from './components/DashBoard/LineChart/LineChart';
import Piechart from './components/DashBoard/PieChart/Piechart';
import Home from './components/Home/Home';
import Message from './components/Message/Message';
import Notebook from './components/Notebook/Notebook';
import Users from './components/Users/Users';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const BasicRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/Users" component={Users}/>
            <Route exact path = "/Message" component={Message}/>
            <Route exact path = "/Notebook" component={Notebook}/>
            <Route exact path = "/Linechart" component={Linechart}/>
            <Route exact path = "/Barchart" component={Barchart}/>
            <Route exact path = "/Piechart" component={Piechart}/>
        </Switch>
    </BrowserRouter>
)

export default BasicRouter;


