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
            <li key={id} className={styles["list-item"]}>
              <input type="checkbox" />
              <p>{value}</p>
              <button onClick={this.handleDelete.bind(this, id)}><Icon type="delete" /></button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList;
