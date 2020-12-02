import React from 'react';

export default class UserItem extends React.Component {
    render(){
        return (
            <>
            Me llamo {this.props.user.name}, tengo {this.props.user.years} años y soy {this.props.user.role}
            </>
        )
    }
}