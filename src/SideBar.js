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
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <svg class="bi bi-pie-chart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z"/>
                        </svg>
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
        )
    }
}

export default SideBar
