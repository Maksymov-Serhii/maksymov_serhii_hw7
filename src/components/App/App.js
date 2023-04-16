import React from 'react';
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Header />
      <AddTask />
      <TodoList />
    </div>
  );
  }
}

export default App;
