import styled from "styled-components";
import { borderDefault, flexColumn } from "../common/CommonStyles";

export const UpdateFormWrapper = styled.div`
  ${flexColumn}
  gap: 2em;
`;

export const UpdateFormTextArea = styled.textarea`
  border: ${borderDefault};
  width: 550px;
  height: 220px;
  padding: 1em;
  border-radius: 0.7em;
`;

export const UpdateFormHeader = styled.div`
  font-size: 20px;
`;

export const UpdateMessage = styled.div`
  font-size: 14px;
  padding: 0.5em;
  margin-top: -2.5em;
`;

export const UpdateErrorMessage = styled(UpdateMessage)`
  color: red;
`;
