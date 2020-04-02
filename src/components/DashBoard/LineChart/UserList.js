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
            <div>
                <div className="title">User List</div>
                <List className="list"
                dataSource={data}
                renderItem={user => 
                    <List.Item className="user" onClick={() => this.selectUser(user)}>
                        <div>
                            { `${user.name}`}
                        </div>
                    </List.Item>}
                />       
            </div>
        )
    }
}

export default UserList;
