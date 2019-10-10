import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed) {
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }

        // ? Usingternary oparator of above expression

        return {
            background: "#f4f4f4",
            padding: "5px",
            borderBottom: "1px dotted #ccc",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        };
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {"  "}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        );
    }
}

// ? PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem;
