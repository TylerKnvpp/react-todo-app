import React from "react";
import TaskForm from "./TaskForm";
import Header from "./Header.js";
import TaskListContainer from "./TaskListContainer";
import "./App.css";

class App extends React.Component {
  state = {
    taskCollection: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/tasks")
      .then(resp => resp.json())
      .then(data => {
        let dbTasks = [...data];
        this.setState({
          taskCollection: dbTasks
        });
      });
  }

  handleSubmit = task => {
    this.setState(
      {
        taskCollection: [...this.state.taskCollection, task]
      },
      () => {
        console.log(task);
      }
    );
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
  };

  handleComplete = task => {
    const newTaskCollection = this.state.taskCollection.filter(
      taskObj => taskObj.details !== task.details
    );

    this.setState({
      taskCollection: newTaskCollection
    });

    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE"
    });
  };

  render() {
    console.log(this.state.taskCollection);

    return (
      <div className="App">
        <Header />
        <TaskForm handleSubmit={this.handleSubmit} />
        <h1>
          {this.state.taskCollection < 1
            ? "Add Some Tasks!"
            : "Remaining Tasks:"}
        </h1>
        <TaskListContainer
          handleComplete={this.handleComplete}
          taskCollection={this.state.taskCollection}
        />
      </div>
    );
  }
}

export default App;
