import React from "react";

class Header extends React.Component {

  render() {
    return (
      <header>
        <h3>Todo App</h3>
        <p>You have {this.props.listCount} Todos</p>
      </header>
    )
  }
}

export default Header;
