import React from 'react';

export default class HelloUser extends React.Component {
    render(){
        const user = {name: 'Abel', surname: 'Cabeza Román'}

        return (
            <h1>Hello {user.name} {user.surname}</h1>
        )
    }
}