import React from "react";
import styles from "./TodoList.module.css";
import Icon from "../Icon/Icon";

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      checkedItems: {},
    }
  }

  handleDelete(id) {
    this.props.onDeleteListItem(id);
  }

  handleCheckboxChange(id) {
    this.setState(prevState => ({
      checkedItems: {
        ...prevState.checkedItems,
        [id]: !prevState.checkedItems[id]
      }
    }));
  }

  render() {
    return (
      <ul className={styles.list}>
        {this.props.list.map(item => {
          const { id, value } = item;
          const isChecked = this.state.checkedItems[id] || false;
          const listItemClassName = isChecked ? styles["list-item-checked"] : styles["list-item"];
          return (
            <li key={id} className={listItemClassName}>
              <div className={styles["checkbox-container"]}>
                <input type="checkbox"
                checked={isChecked}
                onChange={this.handleCheckboxChange.bind(this, id)} />
              </div>
              <p className={styles["list-item-paragraph"]}>{value}</p>
              <button className={styles["delete-button"]} onClick={this.handleDelete.bind(this, id)}><Icon type="delete" /></button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList;
