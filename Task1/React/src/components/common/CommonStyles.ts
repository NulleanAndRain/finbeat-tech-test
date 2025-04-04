import styled from "styled-components";

export const controlBgColor = "#d4d7ff";
export const controlBgColorHighlighted = "#e5e6ff";
export const borderColor = "#1a1a1a";
export const borderDefault = `1px solid ${borderColor}`;

export const flexColumn = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledButton = styled.button`
  padding: 1em 2em;
  border: none;
  border-radius: 1em;
  background-color: ${controlBgColor};

  &:hover {
    background-color: ${controlBgColorHighlighted};
  }
`;
