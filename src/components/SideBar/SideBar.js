import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                        {/* Home */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Home">
                                <AiOutlineHome className="icons"/>
                                <span>HOME</span>                         
                            </NavLink>
                        </li>

                        {/* Users */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Users">
                                <AiOutlineUser className="icons"/>
                                <span>USERS</span>
                            </NavLink>
                        </li>

                        {/* Message */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Message">
                                <AiOutlineMail className="icons"/>
                                <span>MESSAGE</span>
                            </NavLink>                            
                        </li>

                        {/* Notebook */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Notebook">
                                <AiOutlineBook className="icons"/>
                                <span>NOTEBOOK</span>
                            </NavLink>
                            
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown">

                            {/* Dashboard */}
                            <a className="nav-link" href="/#" onClick={this.toggleon} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <AiOutlineDashboard className="icons"/>
                                <span>DASHBOARD</span>
                            </a>

                            
                            {/* Dropdown Menu */}
                            {this.state.toggleon ? (
                                <div className="dropdownmenu" aria-labelledby="navbarDropdownMenuLink">
                                    
                                    {/* LineChart */}
                                    <NavLink className="nav-link dropdownitem" to="/Dashboard/Linechart">
                                        <AiOutlineLineChart className="linechart-icon"/>
                                        <span>LineChart</span>
                                    </NavLink>

                                    {/* BarChart */}
                                    <NavLink className="nav-link dropdownitem" to="/Dashboard/Barchart">
                                        <AiOutlineBarChart className="barchart-icon"/>
                                        <span>BarChart</span>
                                    </NavLink>

                                    {/* PieChart */}
                                    <NavLink className="nav-link dropdownitem" to="/Dashboard/Piechart">
                                        <AiOutlinePieChart className="piechart-icon"/>
                                        <span>PieChart</span>
                                    </NavLink>
                                    
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
