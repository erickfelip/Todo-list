import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1.5em;
  border-radius: 0;
  border: 1px solid #e0e0e0;
`;

export const SubmitInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: #751d00;
  margin-bottom: 1.5em;
  transition: 0.5s;
  border: 1px solid #751d00;
  cursor: pointer;
`;
