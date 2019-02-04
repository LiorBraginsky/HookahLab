import React from "react";
import MyInput from "../MyInput";
import { List as ListItems } from "./List";
import "./styles.css";

const ENTER_KEY = 13;

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentItem: "",
      errors: {}
    };
  }

  isCorrectItem = () => {
    if (!this.state.currentItem) {
      this.setState({
        errors: {
          task: "error user task"
        }
      });
      return false;
    }
    return true;
  };

  addItemAction = ({ items, currentItem }) => ({
    items: [...items, currentItem],
    currentItem: ""
  });

  erroAction = (value, name) => state => ({
    currentItem: value,
    errors: {
      [name]: ""
    }
  });

  addItem = () => {
    if (this.isCorrectItem()) {
      this.setState(this.addItemAction);
    }
  };

  handleInput = e => {
    e.preventDefault();
    const { value, name } = e.target;

    this.setState(this.erroAction(value, name));
  };

  onKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      this.addItem();
    }
  };

  addItemHandler = e => {
    e.preventDefault();
    this.addItem();
  };

  render() {
    const { currentItem, errors, items } = this.state;

    return (
      <div className="TodoList">
        <MyInput
          onChange={this.handleInput}
          onKeyDown={this.onKeyDown}
          name={"New Task"}
          value={currentItem}
          error={errors.task}
        />
        <button onClick={this.addItemHandler}>Add Task</button>
        <ListItems items={items} />
      </div>
    );
  }
}

export default TodoList;
