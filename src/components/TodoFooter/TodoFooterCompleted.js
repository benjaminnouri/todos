import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";

import { observer } from "mobx-react";

@observer
export default class TodoFooterCompleted extends Component {
  onCompleted = () => {
    TodoStore.color = "";
    TodoStore.todos.map(todo => {
      if (todo.completed === true) {
        todo.hide = "";
      }
      if (todo.completed === false) {
        todo.hide = "hidden";
      }
    });
  };
  render() {
    return (
      <li>
        <a href="#/completed" class="selected" onClick={this.onCompleted}>
          Completed
        </a>
      </li>
    );
  }
}
