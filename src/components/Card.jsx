import React from 'react';
import Button from './Button';

export default class Card extends React.Component {
    render(){
        return (
            <figure>
                <img src="logo192.png" alt="logo react"/>
                <figcaption>Titulo de prueba</figcaption>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus obcaecati impedit modi perferendis nemo consectetur error id qui labore enim iure ut minima quibusdam facilis dolorum omnis architecto, fugiat praesentium.</p>
                <Button></Button>
            </figure>
        )
    }
}