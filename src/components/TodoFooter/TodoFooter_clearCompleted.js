import React, { Component } from "react";
import TodoStore from "../../store/TodoStore";
import { observer } from "mobx-react";
@observer
export default class TodoFooter_clearCompleted extends Component {
  ids = [];
  onAllClear = () => {
    TodoStore.todos.map(todo => {
      if (todo.completed === true) {
        this.ids.push(todo.completed);
      }
    });

    for (var i = 0; i < this.ids.length; i++) {
      TodoStore.todos.map(todo => {
        todo.ID -= 1;
      });
      for (var j = 0; j < TodoStore.todos.length; j++) {
        if (TodoStore.todos[j].completed === true) {
          TodoStore.todos.splice(j, 1);
         
        }
      }
    }
    this.ids.splice(0);
  };
  render() {
    return (
      <button class="clear-completed" onClick={this.onAllClear}>
        Clear completed
      </button>
    );
  }
}
