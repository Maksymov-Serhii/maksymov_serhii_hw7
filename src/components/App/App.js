import React from 'react';
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './App.css';

class App extends React.Component {

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
    <div className="App">
      <Header listCount={ this.state.list.length } />
        <AddTask onAddItem={ this.handleAddListItem } />
      <TodoList list={ this.state.list } onDeleteListItem={ this.handleDeleteListItem } />
    </div>
  );
  }
}

export default App;
