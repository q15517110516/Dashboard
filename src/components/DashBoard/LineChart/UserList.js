import React, { Component } from 'react';
import './UserList.css';
import { List } from 'antd';

export class UserList extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    };

    render() {
        const {data} = this.props;
        return (
            <div className="user-list">
                <div className="title">User List</div>
                <div className="list">
                    <List
                    className="listofuser"
                    size="large"
                    dataSource={data}
                    renderItem={user => 
                        <List.Item className="user"  onClick={() => this.selectUser(user)}>
                            <div style={{ width: "20%", height: 60, marginLeft: 20, marginTop: 10 }}>
                                <img src={user.img} style={{width: 42, height: 48}} alt="user"/>
                            </div>
                            <div style={{ width: "80%", font: "20px sans-serif", marginLeft: 20, textAlign: "left"}}>
                                {user.name}
                            </div>
                        </List.Item>}
                    />  
                </div>     
            </div>
        )
    }
}

export default UserList;
