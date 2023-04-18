import React from "react";
import { connect } from "react-redux";
import { incrementAction } from "../../redux/actions";

class Increment extends React.Component {

  handleIncrement() {
    this.props.dispatch(incrementAction)
  }

  render() {
    return (
      <button onClick={this.handleIncrement.bind(this)}>+</button>
    )
  }
}

export default connect()(Increment);
