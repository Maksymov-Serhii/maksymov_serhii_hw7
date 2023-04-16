import React from 'react';
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.handleAddListItem = this.handleAddListItem.bind(this);
  }

  state = {
    list: [],
  }

  handleAddListItem(item) {

  }

  render() {
    return (
    <div className="App">
      <Header listCount={ this.state.list.length } />
        <AddTask onAddItem={ this.handleAddListItem } />
      <TodoList />
    </div>
  );
  }
}

export default App;
