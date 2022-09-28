import styled from "styled-components";

export const StyleButton = styled.button`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ?? "transparent"};
  border-style: ${({ $borderStyle }) => $borderStyle ?? "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border-color: ${({ $borderColor }) => $borderColor ?? "transparent"};
  border-width: ${({ $borderWidth }) => $borderWidth};
  padding: ${({ $padding }) => `${$padding}px`};
  margin: ${({ $margin }) => `${$margin}px`};
  cursor: pointer;
`;
