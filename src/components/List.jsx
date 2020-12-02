import React from 'react';

export default class List extends React.Component {
    render(){
        // const listToRender = [];

        // for (let index = 0; index < this.props.list.length; index++) {
        //     const element = this.props.list[index];
        //     listToRender.push(<li>{element}</li>)
        // }

        return (
            <ul>
                {this.props.list.map((el, index) => <li key={index}>{el}</li>)}
                {/* {listToRender} */}
            </ul>
        )
    }
}