import React from "react";
import { connect } from "react-redux";

const incrementAction = {
  type: "INC"
}

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

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps)(Increment);
