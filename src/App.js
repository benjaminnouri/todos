import React, { Component } from "react";

import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/todoItems/TodoItems";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import { observer } from "mobx-react";
@observer
class App extends Component {
  render() {
    return (
      <section class="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter />
      </section>
    );
  }
}

export default App;
