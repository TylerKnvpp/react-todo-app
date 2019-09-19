import React from "react";

export default class TaskForm extends React.Component {
  state = {
    details: "",
    category: "",
    completed: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      details: "",
      category: "",
      completed: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="formContainer">
        <h1>Add a Task!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="details"
            id="taskField"
            className="inputField"
            action="post"
            placeholder="Task Details"
            onChange={this.handleChange}
            value={this.state.details}
          />
          <br />
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="">Please Select a Category</option>
            <option value="academic">Academic</option>
            <option value="career">Career</option>
            <option value="health">Health</option>
          </select>
          <br />
          <br />

          <button className="addButton">ADD</button>
        </form>
      </div>
    );
  }
}
