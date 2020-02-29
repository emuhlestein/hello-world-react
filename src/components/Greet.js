import React from 'react'

const Greet = (props) => {
    const { name, age } = props;
    return <h1>Hello {props.name}. You are {props.age} years old.</h1>
}

export default Greet
