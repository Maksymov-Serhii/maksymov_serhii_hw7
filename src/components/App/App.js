import React from 'react';
import TodoApp from '../TodoApp/TodoApp';
import ReduxComponent from '../ReduxComponent/ReduxComponent';

class App extends React.Component {
  
  render() {
    return (
    <div className="App">
      <TodoApp />
      <ReduxComponent />
    </div>
  );
  }
}

export default App;
