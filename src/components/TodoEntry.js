import React, { Component } from "react";
import TodoStore from "../../src/store/TodoStore";

export default class TodoEntry extends Component {
  textPlaceHolder = () => {
    var text = "What needs to be done?";
    var b = text.split("");
    var i = 0;
    var set = [];
    set[0] = "";
    setInterval(function() {
      if (i < b.length) {
        set[0] = set[0] + b[i];
        set[1] = "_";
        var c = set.join("");
        document.getElementById("placeHolder").placeholder = c;
        i++;
      } else {
        i = 0;
        set[0] = "";
      }
    }, 500);
  };

  state = {
    VALUE: ""
  };
  handlekeyDown = event => {
    if (event.keyCode !== 13 || this.state.VALUE === "") {
      return;
    }
    // event.preventDefault();
    TodoStore.addTodo(this.state.VALUE);
    this.setState({
      VALUE: ""
    });
  };
  render() {
    this.textPlaceHolder();
    return (
      <header class="header">
        <h1>todos</h1>
        <input
          id="placeHolder"
          onChange={event => this.setState({ VALUE: event.target.value })}
          value={this.state.VALUE}
          onKeyDown={event => this.handlekeyDown(event)}
          class="new-todo"
          placeholder=""
          autofocus
        />
      </header>
    );
  }
}
