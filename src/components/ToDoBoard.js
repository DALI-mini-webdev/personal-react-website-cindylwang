import React, {Component} from 'react';
import firebase from '../firestore/index';
import ToDoPost from './ToDoPosting';

class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allToDos: [],
            title: '',
            task: '',
            id: 0
        }
    }

    newTitleFunction = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    
    newTaskFunction = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    saveNewToDo = () => {
        firebase.db.collection('todo').add({
            title: this.state.title,
            task: this.state.task,
            id: this.state.id
        }).then(ref => {
            console.log('document reference id', ref.id);
            this.setState({
                id: this.state.id + 1
            })
        }).catch((e) => {
            console.log(e);
        })
    }

    fetchToDos = () => {
        const todolist = [];
        firebase.db.collection('todo').get()
            .then(query => {
                query.forEach(doc => {
                    console.log(doc.data());
                    todolist.push(doc.data());
                })
            })
            .then(() => {
                this.setState({
                    allToDos: todolist
                })
            }).catch((e) => {
                console.log(e);
            })
    }

    render() {
        const allPosts = this.state.allToDos.map((todo) => {
            return (
                <ToDoPost
                    title = {todo.title}
                    task = {todo.task}
                />
            )
        })

        return(
            <div>
                <p>This is the To Do Board</p>
                <p>Add a New To Do:</p>

                <p>Enter Title of To Do:</p>
                <input type='text' value={this.state.title} onChange={this.newTitleFunction}/>

                <p>Enter Tasks:</p>
                <input type='text' value={this.state.task} onChange={this.newTaskFunction}/>

                <button onClick={this.saveNewToDo}>Save</button>

                <div>
                    <button onClick={this.fetchToDos}>Show My To Dos</button>
                    {allPosts}
                </div>
            </div>
        )
    }
}

export default ToDoBoard;