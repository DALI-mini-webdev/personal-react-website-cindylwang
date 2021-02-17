import React, {Component} from 'react';
import firebase from '../firestore/index';

class ToDoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.task}</p>
            </div>
        )
    }
}

export default ToDoPost;