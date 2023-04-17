import React from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import styles from './TodoAppPlus.module.css';
import AddTaskPlus from '../AddTaskPlus/AddTaskPlus';

class TodoAppPlus extends React.Component {

  constructor() {
    super();
    this.handleAddListItem = this.handleAddListItem.bind(this);
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this);
  }

  state = {
    list: [],
  }

  handleAddListItem(item) {
    const updatedList = [...this.state.list, item];
    this.setState({
      list: updatedList
    })
  }

  handleDeleteListItem(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }
  
  render() {
    return (
    <div className={styles["todo-app"]}>
      <Header listCount={this.state.list.length} appName="Todo App Plus" />
      <AddTaskPlus onAddItem={ this.handleAddListItem } />
      <TodoList list={ this.state.list } onDeleteListItem={ this.handleDeleteListItem } />
    </div>
  );
  }
}

export default TodoAppPlus;
