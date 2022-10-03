import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-inline: 2rem;

  @media (min-width: 1025px) {
    flex-direction: row;
  }

  h2 {
    font-size: 42px;
    font-weight: bold;
    @media (min-width: 1025px) {
      margin: 2rem;
    }
  }

  label {
    margin-right: 8rem;
    font-size: 14px;
    font-weight: 600;
  }

  .ant-col {
    width: 15rem;
  }
`;
