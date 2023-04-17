import React from "react";
import { v4 } from "uuid";
import styles from "./NewAddTask.module.css"
import Icon from "../Icon/Icon";

class NewAddTask extends React.Component {

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
    if (this.state.value) {
      const item = {
        value: this.state.value,
        id: v4(),
      }
      this.props.onAddItem(item);      
    }
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={styles["input-form"]}>

        <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text" placeholder="Add your new todo" className={styles["input-field"]} />
        
        <button className={styles["submit-button"]}>
          <Icon type="add" />
        </button> 
        
      </form>
    )
  }
}

export default NewAddTask;
