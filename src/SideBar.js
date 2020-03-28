import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SideBar.css';
import { AiOutlineDashboard, 
    AiOutlineUser, 
    AiOutlineHome, 
    AiOutlineBarChart,
    AiOutlineLineChart,
    AiOutlinePieChart,
    AiOutlineBook,
    AiOutlineMail} from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PropTypes } from 'prop-types';
// import PerfectScrollbar from 'perfect-scrollbar';
// import { Nav, NavLink as ReactstrapNavLink } from 'reactstrap';

export class SideBar extends Component {
    constructor(){
        super();
        this.state = {
            toggleon: false,
        }
        this.toggleon = this.toggleon.bind(this);
        
        
    }

    toggleon(event){
        event.preventDefault();
        this.setState({
            toggleon: !this.state.toggleon,
        })
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
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <AiOutlineMail className="icons message"/>
                                <span>MESSAGE</span>
                            </a>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <AiOutlineBook className="icons notebook"/>
                                <span>NOTEBOOK</span>
                            </a>
                            
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" onClick={this.toggleon} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <AiOutlineDashboard className="icons dasnboard"/>
                                <span>DASHBOARD</span>
                            </a>

                            
                            {/* Dropdown Menu */}
                            {this.state.toggleon ? (
                                <div className="dropdownmenu" aria-labelledby="navbarDropdownMenuLink">
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
                            ) : (null)}
                        </li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default SideBar
