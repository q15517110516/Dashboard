import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SideBar.css';
import { AiOutlineDashboard, 
    AiOutlineUser, 
    AiOutlineHome, 
    AiOutlineBarChart,
    AiOutlineLineChart,
    AiOutlinePieChart } from 'react-icons/ai';
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
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            
                            <a className="nav-link" href="#">
                                <AiOutlineHome className="icons home"/>
                                <span>HOME</span>                         
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <AiOutlineUser className="icons user"/>
                                <span>USERS</span>
                            </a>
                            
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <AiOutlineDashboard className="icons dasnboard"/>
                                <span>DASHBOARD</span>
                            </a>
                            
                            {/* Dropdown Menu */}
                            <div className="dropdown menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="nav-link dropdownitem" href="#">
                                    <AiOutlineLineChart className="linechart-icon"/>
                                    <span>LineChart</span>
                                </a>
                                <a className="nav-link dropdownitem" href="#">
                                    <AiOutlineBarChart className="barchart-icon"/>
                                    <span>BarChart</span>
                                </a>
                                <a className="nav-link dropdownitem" href="#">
                                    <AiOutlinePieChart className="piechart-icon"/>
                                    <span>PieChart</span>
                                </a>
                                
                            </div>
                        </li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default SideBar
