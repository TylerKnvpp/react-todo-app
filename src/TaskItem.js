import React from "react";
import academicIcon from "./academic.svg";
import careerIcon from "./career.svg";
import healthIcon from "./health.svg";

export default class TaskItem extends React.Component {
  handleComplete = e => {
    e.preventDefault();
    this.props.handleComplete(this.props.task);
  };

  renderIcon(params) {
    switch (params) {
      case "academic":
        return academicIcon;
      case "career":
        return careerIcon;
      case "health":
        return healthIcon;
      default:
        break;
    }
  }

  render() {
    // console.log("task item props:", this.props);

    const inlineStyle = {
      display: "inline-flex"
    };

    const iconStyle = {
      height: "25px",
      width: "auto",
      marginRight: "2em"
    };

    return (
      <div className="taskItemContainer">
        <div style={inlineStyle}>
          <img
            style={iconStyle}
            src={this.renderIcon(this.props.task.category)}
            alt={this.props.task.category}
          />
          <li className="taskItem">{this.props.task.details}</li>
          <button onClick={this.handleComplete} className="delete">
            COMPLETE
          </button>
        </div>
      </div>
    );
  }
}
