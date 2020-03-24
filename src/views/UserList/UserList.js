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
            <div id="view6" className="pane">
                <div className="header">User List</div>
                <List className="list"
                dataSource={data}
                renderItem={user => 
                    <List.Item className="user" onClick={() => this.selectUser(user)}>
                        <div>
                            { `${user.name} Age: ${user.age}`}
                        </div>
                    </List.Item>}
                />       
            </div>
        )
    }
}

export default UserList;
