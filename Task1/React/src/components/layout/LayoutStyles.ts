import styled from "styled-components";
import { borderDefault, flexColumn } from "../common/CommonStyles";

export const LayoutWrapper = styled.div`
  width: 100%;
  ${flexColumn}
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
`;

export const BreakLine = styled.div`
  width: 90%;
  height: 0;
  border-top: ${borderDefault};
`;
