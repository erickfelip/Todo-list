import React, { useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Task } from "./@types";

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <>
      <Header />
      <TaskForm
        formButton="New Task"
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList />
    </>
  );
};
