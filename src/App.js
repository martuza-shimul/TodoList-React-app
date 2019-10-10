import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Take out the trash",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Dinner with Girlfriend",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Meeting with Boss",
                completed: false
            }
        ]
    };

    // ?Toggle complete
    markComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // ? Delete Todo

    delTodo = id => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    };

    //* Add Todo

    addTodo = title => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                    />
                    <AddTodo addTodo={this.addTodo}/>
                </div>
            </div>
        );
    }
}

export default App;
