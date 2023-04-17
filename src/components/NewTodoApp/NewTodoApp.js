import React from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import styles from './NewTodoApp.module.css';
import NewAddTask from '../NewAddTask/NewAddTask';

class NewTodoApp extends React.Component {

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
      <Header listCount={ this.state.list.length } appName="New Todo App" />
      <NewAddTask onAddItem={ this.handleAddListItem } />
      <TodoList list={ this.state.list } onDeleteListItem={ this.handleDeleteListItem } />
    </div>
  );
  }
}

export default NewTodoApp;
