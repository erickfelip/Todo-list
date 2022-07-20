import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Modal } from "./components/Modal";
import { Task } from "./@types";
import { toast } from "react-toastify";

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const savedTaskList = JSON.parse(localStorage.getItem("tasks") as string);
  useEffect(() => {
    if (savedTaskList) setTaskList(savedTaskList);
  }, []);

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
    toast.warn("Task has been deleted");
  };

  const UpdateTask = (id: string, title: string) => {
    const updateTask: Task = { id, title };
    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });
    setTaskList(updatedItems);
    setIsModalOpen(!isModalOpen);
    toast.success("Task updated successfully");
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
