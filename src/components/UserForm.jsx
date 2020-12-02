import React from 'react';

export default class UserForm extends React.Component {

    createUser = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const years = document.getElementById('years').value;
        const role = document.getElementById('role').value;

        this.props.fnAddUser({name,years,role});
    }
    
    render(){
        return (
           <form onSubmit={this.createUser}>

            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>

            <label htmlFor="years">Years</label>
            <input id="years" type="number"/>

            <label htmlFor="role">Role</label>
            <input id="role" type="text"/>

            <input type="submit" value="Guardar"/>

           </form>
        )
    }
}