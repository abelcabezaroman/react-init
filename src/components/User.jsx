import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

export default class User extends React.Component {
    state = {
        users: [
            {
                name: 'Abel Cabeza',
                years: 25,
                rol: 'Profesor'
            }, {
                name: 'Rolo',
                years: 25,
                rol: 'Estudiante'
            }, {
                name: 'Karen',
                years: 23,
                rol: 'Estudiante'
            }
        ]
    }

    removeUser = (index) => {
        // const a = [5,24,7];
        // const b = [10, 2];

        // const c = [...a, ...b, 55, 97, ...b] // [5,24,7,10,2,55,97,10,2]

        const users = [...this.state.users]

        users.splice(index, 1);

        this.setState({
            users // users: users
        })
    }

    addUser = () => {
        
    }

    render() {
        return (
            <>
                <UserForm></UserForm>
                <UserList users={this.state.users} fnRemoveUser={this.removeUser}></UserList>
            </>
        )
    }
}

// let a = 1;
// let b = a;

// b = 3;

// console.log(a); = 
// console.log(b);



// let a = {num: 5};
// let b = a;

// b.num = 10;

// console.log(a.num) // = 10
// console.log(b.num) // = 10



// let a = {num: 5};
// let b = {pepe: a};

// let c = {...b}
// // let c = JSON.parse(JSON.stringify(b))

// c.pepe.num = 10;

// console.log(a.num) // = 10