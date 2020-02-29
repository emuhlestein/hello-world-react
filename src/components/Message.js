import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
        super()

        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Wecome Ed'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Welcome</button>
            </div>
        )
    }
}

export default Message
