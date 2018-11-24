import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";
import TodoFooter_clearCompleted from "./TodoFooter_clearCompleted";
import TodoFooterActive from "./TodoFooterActive";
import TodoFooterCompleted from "./TodoFooterCompleted";
import TodoFooterALL from "./TodoFooterALL";
import { observer } from "mobx-react";
@observer
export default class TodoFooter extends Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{TodoStore.ID}</strong> item left
        </span>
        <ul class="filters">
          <TodoFooterALL />
          <TodoFooterActive />
          <TodoFooterCompleted />
        </ul>
        <TodoFooter_clearCompleted />
      </footer>
    );
  }
}
