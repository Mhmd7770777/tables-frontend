import React from "react";
import { StyledContainer } from "./style";

import Hero from "../../Molecules/Hero";
import LoginForm from "../../Organisms/LoginForm";

const login = () => {
  return (
    <StyledContainer>
      <Hero />
      <LoginForm />
    </StyledContainer>
  );
};

export default login;
