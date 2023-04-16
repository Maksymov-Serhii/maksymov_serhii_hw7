import React from "react";

class AddTask extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add your new todo" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddTask;
