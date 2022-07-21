import React from "react";
import { Task } from "../../@types";
import { Wrapper, Content, Icons, Container, NoTask, Text } from "./styles";
import { BiPencil, BiTrash } from "react-icons/bi";
import { MdList } from "react-icons/md";

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
              <Text>{task.title}</Text>
            </Content>
            <Icons>
              <BiPencil onClick={() => handleEditTask(task)} />
              <BiTrash onClick={() => handleDelete(task.id)} />
            </Icons>
          </Wrapper>
        ))
      ) : (
        <NoTask>
          <MdList size={40} />
          <Text>Você não tem tarefas registradas :( </Text>
        </NoTask>
      )}
    </Container>
  );
};
