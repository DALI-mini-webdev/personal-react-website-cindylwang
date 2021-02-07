import React, {Component} from 'react';

class UserPosting extends Component {
    constructor (props) {
        super (props);
        this.state = {editing: false};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }
    editPosting = () => {
        this.setState({editing: true})
    }

    render() {
        var editBoxOrEditButton = null;
        if (this.state.editing) {
            editBoxOrEditButton = (
                <div>
                   <input value={this.state.newPosting} onChange={this.changeNewPosting}/>
                   <button>Submit</button>
                </div>
            )
        }
        else {
            editBoxOrEditButton = <button onClick={this.editPosting}>Edit Posting</button>
        }

        return (
            <div className='App-header'>
                <p>{this.props.name}</p>
                <img src={this.props.userURL} width={100} height={100}/>
                <button onClick={this.deletePosting}>Delete</button>
                {editBoxOrEditButton}
            </div>
        )
    }
}

export default UserPosting;