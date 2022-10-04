import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 5vw;
  background-color: black;
  padding: 3rem;

  @media (min-width: 800px) {
    width: 70vw;
  }

  h1 {
    display: none;
    font-size: 5rem;
    color: white;

    @media (min-width: 800px) {
      display: block;
    }
  }
`;
