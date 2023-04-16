import React from "react";
import styles from "./Header.module.css"

class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <h2>Todo App</h2>
        <p>You have {this.props.listCount} Todos</p>
      </header>
    )
  }
}

export default Header;
