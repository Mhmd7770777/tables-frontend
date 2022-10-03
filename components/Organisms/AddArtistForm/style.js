import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-inline: 2rem;

  h2 {
    font-size: 42px;
    font-weight: bold;
    margin: 2rem;
  }

  label {
    margin-right: 8rem;
    font-size: 14px;
    font-weight: semi-bold;
  }

  .ant-col {
    width: 15rem;
  }

  button {
    margin-left: 5rem;
  }
`;
