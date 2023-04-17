import React from 'react';
import TodoApp from '../TodoApp/TodoApp';
import ReduxComponent from '../ReduxComponent/ReduxComponent';
import NewTodoApp from '../NewTodoApp/NewTodoApp';

class App extends React.Component {
  
  render() {
    return (
    <div className="App">
      <TodoApp />
      <ReduxComponent />
      <NewTodoApp />
    </div>
  );
  }
}

export default App;
