import { observable, action, keys, values } from "mobx";
import TodoModel from "./TodoMoel";

class TodoStore {
  @observable todos = [];
  @observable ID = 0;
  @observable color = "rgba(175, 47, 47, 0.2)";

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title, false, this.ID++));
  }
}

const store = new TodoStore();
export default store;
