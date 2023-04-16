import React from "react";

class TodoList extends React.Component {

  handleDelete(id) {
    this.props.onDeleteListItem(id);
  }

  render() {
    return (
      <ul>
        {this.props.list.map(item => {
          const { id, value } = item;
          return (
            <li key={id}>
              <input type="checkbox" />
              {value}
              <button onClick={this.handleDelete.bind(this, id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList;
