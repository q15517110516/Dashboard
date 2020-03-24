import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PropTypes } from 'prop-types';
// import PerfectScrollbar from 'perfect-scrollbar';
// import { Nav, NavLink as ReactstrapNavLink } from 'reactstrap';

export class SideBar extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="sidebar">
                <div className="side-wrapper">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Users</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        )
    }
}

export default SideBar
