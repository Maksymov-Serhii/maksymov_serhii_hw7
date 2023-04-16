import React from "react";

class AddTask extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.onAddItem(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text" placeholder="Add your new todo" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddTask;
