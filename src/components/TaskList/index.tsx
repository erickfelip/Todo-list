import React from "react";
import { Task } from "../../@types";
import { Wrapper, Content, Icons, Container, NoTask } from "./styles";
import { BiPencil, BiTrash } from "react-icons/bi";

interface Props {
  taskList: Task[];
  handleDelete(id: string): void;
  handleEditTask(task: Task): void;
}

export const TaskList = ({ taskList, handleDelete, handleEditTask }: Props) => {
  return (
    <Container>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Wrapper key={task.id}>
            <Content>
              <h1>{task.title}</h1>
            </Content>
            <Icons>
              <BiPencil onClick={() => handleEditTask(task)} />
              <BiTrash onClick={() => handleDelete(task.id)} />
            </Icons>
          </Wrapper>
        ))
      ) : (
        <NoTask>Has no task</NoTask>
      )}
    </Container>
  );
};
