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
                        <li className="nav-item">
                            
                            <NavLink className="nav-link" to="/Home">
                                <AiOutlineHome className="icons home"/>
                                <span>HOME</span>                         
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Users">
                                <AiOutlineUser className="icons user"/>
                                <span>USERS</span>
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Message">
                                <AiOutlineMail className="icons message"/>
                                <span>MESSAGE</span>
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Notebook">
                                <AiOutlineBook className="icons notebook"/>
                                <span>NOTEBOOK</span>
                            </NavLink>
                            
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
                                    <NavLink className="nav-link dropdownitem" to="/Dashboard/Linechart">
                                        <AiOutlineLineChart className="linechart-icon"/>
                                        <span>LineChart</span>
                                    </NavLink>
                                    <NavLink className="nav-link dropdownitem" to="/Dashboard/Barchart">
                                        <AiOutlineBarChart className="barchart-icon"/>
                                        <span>BarChart</span>
                                    </NavLink>
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
