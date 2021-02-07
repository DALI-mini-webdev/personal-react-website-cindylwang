import React, {Component} from 'react';
import {Map} from 'immutable';
import UserPosting from './UserPosting'

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
    newUserImageFunction = (event) => {
        this.setState({newUserImage: event.target.value});
    }
    saveUserInfo = () => {
        let userData = {
            name: this.state.newUserName,
            image: this.state.newUserImage,
        }
        this.setState ({
            Users: this.state.Users.set(this.state.UserID, userData),
            UserID: this.state.userID + 1
        });
    }
    delete = (id) => {
        this.setState({Users: this.state.Users.delete(id)})
    }
    submit = () => {
        var newName ={
            name: this.state.newPost
        }
        this.props.save(this.props.id, newName);
        this.setState({editing: false})
    }
    save = (id, field) => {
        this.setState({Users: this.state.Users.update(id, (n) => {return Object.assign({}, n, field); })})
    }

    render() {
        const allUsers = this.state.Users.entrySeq().map(
            ([id, user]) => {
                return(
                    <UserPosting 
                        save = {this.save}
                        delete = {this.delete}
                        name = {user.name}
                        userURL = {user.image}
                        id = {id}
                        key = {id}
                />
                )
            }
        )
        return (
            <div className = 'App-header'>
                {allUsers}

                <p>Enter name:</p>
                <input type="text" value={this.state.newUserName} onChange={this.newUserNameFunction}/>

                <p>Enter image URL of you (if you want):</p>
                <input type="text" value={this.state.newUserImage} onChange={this.newUserImageFunction}/>

                <button onClick={this.saveUserInfo}>Submit</button>
            </div>
        );
    }
}

export default UserBoard;