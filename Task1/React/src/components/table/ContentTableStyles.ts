import styled from "styled-components";
import {
  borderDefault,
  controlBgColor,
  controlBgColorHighlighted,
  flexColumn,
} from "../common/CommonStyles";

export const ContentTableWrapper = styled.div`
  ${flexColumn}
  gap: 2em;
  width: 100%;
`;

export const TableFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 2em;
`;

export const TableFilterItem = styled.div`
  ${flexColumn}
  width: min-content;
  gap: 0.5em;

  span {
    width: 100%;
    text-align: center;
  }
`;

export const TableFilterInput = styled.input`
  border: ${borderDefault};
  border-radius: 0.5em;
  padding: 0.5em 1em;
  width: 100px;
`;

export const TableContainer = styled.table`
  width: 80%;
  border-collapse: collapse;
  border: none;
`;

export const TableHeader = styled.thead`
  border: none;
  border-bottom: ${borderDefault};
  box-sizing: border-box;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  width: 100%;
  &:nth-child(even) {
    background-color: #efefef;
  }
`;

export const TableHeaderCell = styled.th<{ $width?: string }>`
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  ${({ $width }) => ($width ? `width: ${$width}` : "")};
  padding: 0.5em 0;
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 0.5em 0;
  box-sizing: border-box;
  font-size: 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PaginationCell = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${controlBgColor};
  border: none;
  border-radius: 4px;

  &:enabled {
    cursor: pointer;
  }
  &:hover {
    background-color: ${controlBgColorHighlighted};
  }
`;
