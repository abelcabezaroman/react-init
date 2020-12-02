import React from 'react';
import UserItem from './UserItem';

export default class UserList extends React.Component {
    render(){
        return (
        <ul>
            {this.props.users.map((user, index) => <li key={index}><UserItem user={user}></UserItem> <button onClick={() => {this.props.fnRemoveUser(index)}}>X</button></li>)}
        </ul>
        )
    }
}