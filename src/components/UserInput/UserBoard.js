import React, {Component} from 'react';
import {Map} from 'immutable';

class UserBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: Map(),
            UserID: 0,
            newUserName: '',
            newUserImage: ''
        }
    }
    newUserNameFunction = (event) => {
        this.setState({newUserName: event.target.value});
    }

    newUserImage = (event) => {
        this.setState({newUserImage: event.target.value});
    }
    
    render() {
        return (
            <div>
                <p>What is your name?</p>
            </div>
        );
    }
}

export default UserBoard;