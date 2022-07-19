import React, { useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Modal } from "./components/Modal";
import { Task } from "./@types";

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const editTask = (task: Task): void => {
    setIsModalOpen(!isModalOpen);
    setTaskToUpdate(task);
  };

  const deleteTask = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const UpdateTask = (id: string, title: string) => {
    const updateTask: Task = { id, title };

    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updatedItems);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Modal
        onClose={toggleModal}
        isOpen={isModalOpen}
        children={
          <TaskForm
            formButton="Edit Task"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={UpdateTask}
          />
        }
      />
      <Header />
      <TaskForm
        formButton="New Task"
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList
        taskList={taskList}
        handleDelete={deleteTask}
        handleEditTask={editTask}
      />
    </>
  );
};
