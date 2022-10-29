// Style your elements here

import styled from "styled-components";

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`;
export const InputContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 70vh;
  padding: 20px;
  border-radius: 20px;
`;
export const Heading = styled.h1`
  color: white;
  font-family: "Roboto";
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 12px;
`;

export const Input = styled.input`
  background-color: white;
  border-style: none;
  border-radius: 4px;
  padding: 5px;
`;
export const ErrorMessage = styled.p`
  color: #ef4444;
  text-align: center;
`;
