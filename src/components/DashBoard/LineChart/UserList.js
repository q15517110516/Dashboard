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
                size="large"
                dataSource={data}
                renderItem={user => 
                    <List.Item className="user"  onClick={() => this.selectUser(user)}>
                        <div>
                        </div>
                    
                        <div>
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
