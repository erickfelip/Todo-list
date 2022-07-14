import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 60%;
  margin: 0 10%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  cursor: auto;
`;

export const Close = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: auto;
`;

export const ModalTitle = styled.div``;

export const ModalContent = styled.div``;
