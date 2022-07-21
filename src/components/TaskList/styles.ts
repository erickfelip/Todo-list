import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition-duration: 0.5s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 12px 16px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Content = styled.div`
  text-align: center;
  font-size: 15px;
`;

export const Icons = styled.h1`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 1rem;
  font-size: 22px;
`;

export const Container = styled.div``;

export const NoTask = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p``;
