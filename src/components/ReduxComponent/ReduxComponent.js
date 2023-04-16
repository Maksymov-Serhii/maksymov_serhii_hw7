import React from "react";
import styles from "./ReduxComponent.module.css"
import { connect } from "react-redux";
import Increment from "../Increment/Increment";
import Decrement from "../Decrement/Decrement";

class ReduxComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles["redux-app"]}>
        <h3>I'm the redux component</h3>
        <Increment />
        <p>Counter: {this.props.counter}</p>
        <Decrement />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return {counter: state} };

export default connect(mapStateToProps)(ReduxComponent);
