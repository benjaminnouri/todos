import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";

import { observer } from "mobx-react";

@observer
export default class TodoFooterActive extends Component {
  onActive = () => {
    TodoStore.color = "";
    TodoStore.todos.map(todo => {
      if (todo.completed === false) {
        todo.hide = "";
      }
      if (todo.completed === true) {
        todo.hide = "hidden";
      }
    });
  };
  render() {
    return (
      <li>
        <a href="#/active" class="selected" onClick={this.onActive}>
          Active
        </a>
      </li>
    );
  }
}
