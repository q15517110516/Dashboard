import React, { Component } from 'react';
import data from './data';
import UserProfile from './views/UserProfile/UserProfile';
import Gender from './views/Gender/Gender';
import Filter from './views/Filter/Filter';
import PerformanceSheet from './views/PerformanceSheet/PerformanceSheet';
import Age from './views/Age/Age';
import UserList from './views/UserList/UserList';
import './dashboard.css';


export class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedUser: data[0],
      greaterThenAge: 0,
      includedGender: ['Male', 'Female', 'Unknown'],
    }
  };

  changeSelectUser = value => {
    this.setState({
      selectedUser: value
    });
  };

  changeGreaterThenAge = value => {
    this.setState({
      greaterThenAge: value
    });
  };

  changeIncludedGender = value => {
    this.setState({
      includedGender: value
    });
  };

  render() {
    const {selectedUser, greaterThenAge, includedGender} = this.state;
    const filteredData = data.filter(user=>includedGender.indexOf(user.gender) !== -1)
                              .filter(user=>user.age > greaterThenAge);

    return (
      <div>
        <div className="flex-container">
          
          {/* Sider flexbox */}
          <div className="sider">
            <div className="userprofile">
              <UserProfile user={selectedUser}/>
            </div>
            <div className="usergender">
              <Gender data={filteredData}/>
            </div>
            <div className="genderfilter">
              <Filter changeGreaterThenAge={this.changeGreaterThenAge}
                      changeIncludedGender={this.changeIncludedGender}/>
            </div>
          </div>

          {/* Content flexbox */}
          <div className="content">
            
            <div className="content1">
              <div className="performancesheet">
                <PerformanceSheet user={selectedUser}/>
              </div>
            </div>

          
            <div className="content2">
              <div className="userage">
                <Age data={filteredData}/>
              </div>
              <div className="userlist">
                <UserList data={filteredData} changeSelectUser={this.changeSelectUser}/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Dashboard
