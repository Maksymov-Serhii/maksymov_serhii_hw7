import React from "react";
import styles from "./TodoList.module.css";
import Icon from "../Icon/Icon";

class TodoList extends React.Component {

  handleDelete(id) {
    this.props.onDeleteListItem(id);
  }

  render() {
    return (
      <ul className={styles.list}>
        {this.props.list.map(item => {
          const { id, value } = item;
          return (
            <li key={id}>
              <input type="checkbox" />
              {value}
              <button onClick={this.handleDelete.bind(this, id)}><Icon type="delete" /></button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList;
