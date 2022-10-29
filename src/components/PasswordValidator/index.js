// Write your code here

import { useState } from "react";

import {
  PasswordContainer,
  InputContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMessage
} from "./styledComponents";

const PasswordValidator = () => {
  const [input, setValidInputPassword] = useState("");
  const errorMessage =
    input.length < 8 ? "Your password must be at least 8 characters " : " ";

  const onChangePassword = (event) => {
    setValidInputPassword(event.target.value);
  };

  return (
    <PasswordContainer>
      <InputContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input
          size="35"
          type="password"
          value={input}
          onChange={onChangePassword}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputContainer>
    </PasswordContainer>
  );
};

export default PasswordValidator;
