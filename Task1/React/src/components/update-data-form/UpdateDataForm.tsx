import React, { useCallback, useRef, useState } from "react";
import {
  UpdateErrorMessage,
  UpdateFormHeader,
  UpdateFormTextArea,
  UpdateFormWrapper,
  UpdateMessage,
} from "./UpdateDataFormStyles";
import { updateData } from "../../utils/api";
import { AxiosError } from "axios";
import { StyledButton } from "../common/CommonStyles";

const defaultValue = `[
  {"1": "value1"},
  {"5": "value2"},
  {"10": "value32"}
]`;

export const UpdateDataForm = () => {
  const textAreaRef = useRef(null as HTMLTextAreaElement | null);

  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(null as string | null);

  const resetMessages = () => {
    setDisplaySuccess(false);
    setDisplayError(null);
  };

  const saveHandler = useCallback(() => {
    resetMessages();

    textAreaRef.current &&
      updateData(textAreaRef.current.value)
        .then(() => {
          setDisplaySuccess(true);
        })
        .catch((error: AxiosError) => {
          if (error.status === 400) setDisplayError("Ошибка в схеме данных");
          else setDisplayError("Возникла ошибка во время сохранения");
        });
  }, [textAreaRef]);

  return (
    <UpdateFormWrapper>
      <UpdateFormHeader> Обновить данные: </UpdateFormHeader>

      <UpdateFormTextArea
        defaultValue={defaultValue}
        ref={textAreaRef}
        onChange={() => {
          resetMessages();
        }}
        onBlur={() => {
          resetMessages();
        }}
        onFocus={() => {
          resetMessages();
        }}
      />

      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          saveHandler();
        }}
      >
        Сохранить
      </StyledButton>

      {displaySuccess && <UpdateMessage>Сохранено!</UpdateMessage>}
      {displayError && <UpdateErrorMessage>{displayError}</UpdateErrorMessage>}
    </UpdateFormWrapper>
  );
};
