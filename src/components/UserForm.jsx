import React from 'react';

export default class UserForm extends React.Component {
    state = {}
    
    handleChange = ($event) => {
        this.setState({ [$event.target.name]: $event.target.value });
    }
    
    createUser = ($event) => {
        $event.preventDefault();

        // const name = document.getElementById('name').value;
        // const years = document.getElementById('years').value;
        // const role = document.getElementById('role').value;

        // this.props.fnAddUser({ name, years, role });
        this.props.fnAddUser(this.state);
    }

    render() {
        return (
            <form onSubmit={this.createUser}>

                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" onChange={this.handleChange}/>

                <label htmlFor="years">Years</label>
                <input id="years" type="number" name="years" onChange={this.handleChange} />


                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

                <input type="submit" value="Guardar" />

            </form>
        )
    }
}