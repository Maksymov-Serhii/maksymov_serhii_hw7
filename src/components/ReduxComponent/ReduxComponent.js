import React from "react";
import styles from "./ReduxComponent.module.css"

export default class ReduxComponent extends React.Component {
  render() {
    return (
      <div className={styles["redux-app"]}>
        <h3>I'm the redux component</h3>
      </div>
    )
  }
}
