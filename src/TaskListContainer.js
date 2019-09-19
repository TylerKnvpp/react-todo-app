import React from "react";
import TaskItem from "./TaskItem";

const TaskListContainer = props => {
  // console.log("props: ", props);
  const renderTasks = props.taskCollection.map(taskObj => (
    <TaskItem
      handleComplete={props.handleComplete}
      key={taskObj.id}
      task={taskObj}
    />
  ));
  return (
    <div className="taskListContainer">
      <ul>{renderTasks}</ul>
    </div>
  );
};

export default TaskListContainer;
