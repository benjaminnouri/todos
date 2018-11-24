import React, { Component } from "react";
import TodoItemsNew from "./TodoItemsNew";
import TodoStore from "../../store/TodoStore";

import { observer } from "mobx-react";
@observer
export default class TodoItems extends Component {
  render() {
    return (
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <ul class="todo-list">
          {TodoStore.todos.map(todo => {
            return <TodoItemsNew todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}
