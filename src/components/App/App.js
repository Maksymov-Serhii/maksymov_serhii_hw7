import React from 'react';
import TodoApp from '../TodoApp/TodoApp';
import ReduxComponent from '../ReduxComponent/ReduxComponent';
import TodoAppPlus from '../TodoAppPlus/TodoAppPlus';

class App extends React.Component {
  
  render() {
    return (
    <div className="App">
      <TodoApp />
      <ReduxComponent />
      <TodoAppPlus />
    </div>
  );
  }
}

export default App;
