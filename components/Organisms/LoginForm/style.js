import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-btn {
    margin-right: 12px;
    background-color: black;
  }

  .ant-form {
    border: 0.5px solid black;
    border-radius: 35px;
    padding: 24px;
    padding-top: 48px;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .seperated {
    @media (max-width: 576px) {
      width: 3rem;
    }
  }

  .marginned {
    margin-top: 0.75rem;
  }
`;
