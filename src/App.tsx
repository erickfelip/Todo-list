import React, { useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./@types";

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const deleteTask = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <TaskForm
        formButton="New Task"
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList taskList={taskList} handleDelete={deleteTask} />
    </>
  );
};
