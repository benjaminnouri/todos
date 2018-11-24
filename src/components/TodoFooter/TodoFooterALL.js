import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";

import { observer } from "mobx-react";

@observer
export default class TodoFooterALL extends Component {
  onALL = () => {
    TodoStore.todos.map(todo => {
      todo.hide = "";
    });
  };
  render() {
    return (
      <li>
        <a
          class="selected"
          href="#"
          onClick={this.onALL}
          style={{
            borderColor: TodoStore.color
          }}
        >
          All
        </a>
      </li>
    );
  }
}
