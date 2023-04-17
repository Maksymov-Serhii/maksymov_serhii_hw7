import React from "react";
import { connect } from "react-redux";
import { decrementAction } from "../redux/actions";

class Decrement extends React.Component {

  handleDecrement() {
    this.props.dispatch(decrementAction);
  }

  render() {
    return (
      <button onClick={this.handleDecrement.bind(this)}>-</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps)(Decrement);
