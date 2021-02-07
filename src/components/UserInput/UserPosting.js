import React, {Component} from 'react';

class UserPosting extends Component {
    constructor (props) {
        super (props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <p>{this.props.name} </p>
                <img src={this.props.userURL} alt = 'Image'/>
            </div>
        )
    }
}

export default UserPosting;