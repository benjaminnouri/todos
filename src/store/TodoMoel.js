import { observable, action } from "mobx";

export default class TodoModel {
  @observable title;
  @observable completed;
  @observable ID = 0;
  @observable hide = 0;

  constructor(title, completed, ID) {
    this.title = title;
    this.completed = completed;
    this.ID = ID;
    this.hide;
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }
}
