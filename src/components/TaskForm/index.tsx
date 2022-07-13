import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Form, Content, Input, SubmitInput, Label } from "./styles";
import { Task } from "../../@types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  formButton: string;
  taskList: Task[];
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskForm = ({ formButton, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();
    const newTask: Task = { id, title };
    setTaskList!([...taskList, newTask]);
    setTitle("");

    console.log(taskList);
  };
  console.log("ID: ", id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
  };

  return (
    <Form onSubmit={addTaskHandler}>
      <Content>
        <Label htmlFor="title">Título: </Label>
        <Input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </Content>
      <SubmitInput type="submit" value={formButton} />
    </Form>
  );
};
