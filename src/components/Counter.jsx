import React from 'react';

export default class Counter extends React.Component {
	// constructor(props) {
	// 	super(props);
	
	// 	// Podemos inicializar el estado fuera del constructor
	// 	this.state = { count: 0 }
    // }
    
    state = {count: 0};

    // Usamos arrow functions para mantener la referencia a this
	add = () => {
        // this.state.count = this.state.count + 1; // MAL
		this.setState({
			count: this.state.count + 1
        }); // BIEN

        // setTimeout(
        //     () => {
        //         console.log(this.state.count)
        //     }
        // , 100)

        // console.log(this.state.count);
    }

    // addSec() {
    //     this.setState({
	// 		count: this.state.count + 1
    //     }); // BIEN
    // }
    
    substract = () => {
        this.setState({
			count: this.state.count - 1
        }); 
    }

    multiply = () => {
        this.setState({
			count: this.state.count * 2
        }); 
    }

    divide = () => {
        this.setState({
			count: this.state.count / 2
        }); 
    }

    reset = () => {
        this.setState({
			count: 0
        }); 
    }


    multiplySec = () => {
        this.multiplyByNum(5)
    }

    multiplyByNum = (num) => {
        this.setState({
			count: this.state.count * num
        });
    }

    render() {
        return (
            <div>
                <h2>The count is {this.state.count}</h2>

                <button onClick={this.substract}>-</button>
                <button onClick={this.add}>+</button>
                {/* <button onClick={this.addSec.bind(this)}>+</button> */}
                <button onClick={this.multiply}>*2</button>
                <button onClick={() => {this.multiplyByNum(5)}}>*5</button>
                <button onClick={this.multiplySec}>*5</button>
                <button onClick={this.divide}>/2</button>
                <button onClick={this.reset}>reset</button>
            </div>)
    }
}

// function pepe () {
//     console.log(this);
// }

// const pepe = () => {
//     console.log(this);
// }