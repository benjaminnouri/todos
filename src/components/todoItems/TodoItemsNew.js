import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoItemsNew extends Component {
  onToggle = () => {
    this.props.todo.toggle();
    if (this.props.todo.completed == true) TodoStore.ID -= 1;
    if (this.props.todo.completed == false) TodoStore.ID += 1;
  };

  onDestroy = () => {
    TodoStore.todos.splice(this.props.todo.ID, 1);
    TodoStore.todos.map(TODO => {
      TODO.ID -= 1;
    });
    if (TodoStore.ID !== 0 && this.props.todo.completed == false)
      TodoStore.ID -= 1;
  };
  render() {
    const { todo } = this.props;

    return [
      <script>var DIV = $("li").append("div");</script>,
      <li
        className={todo.completed ? "completed" : ""}
        id="remove"
        hidden={todo.hide}
      >
        <div class="view">
          <input
            onChange={this.onToggle}
            class="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button class="destroy" onClick={this.onDestroy} />
        </div>
      </li>
    ];
  }
}
