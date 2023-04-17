import React from "react";
import { v4 } from "uuid";
import styles from "./NewAddTask.module.css"
import Icon from "../Icon/Icon";

class NewAddTask extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
      showModal: false,
    }
    this.defaultState = this.state;
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
      this.setState(this.defaultState);
    }
  }

  handleModalToggle() {
    this.setState({
      showModal: !this.state.showModal,
      value: '',
    })
  }

  render() {
    return (
      <div className={styles["input-form"]}>
        {!this.state.showModal && (<button className={styles["add-button"]} onClick={this.handleModalToggle.bind(this)}>
          <Icon type="add" />
        </button> 
          )}

        {this.state.showModal && (
          <div className={styles["modal-container"]}>

              <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Add your new todo" className={styles["modal-input-field"]} />

              <button className={styles["modal-button"]} disabled={!this.state.value} onClick={this.handleSubmit.bind(this)}>Додати</button>

              <button className={styles["modal-button"]} onClick={this.handleModalToggle.bind(this)}>
                Відмінити
              </button>
              
            </div>
        )}

      </div>      
    )
  }
}

export default NewAddTask;
