import React, { useState } from "react";
import {
  TableFilterInput,
  TableFilterItem,
  TableFiltersWrapper,
} from "./ContentTableStyles";
import { StyledButton } from "../common/CommonStyles";
import { FilterNoPage } from "../../types";

export interface TableFiltersProps {
  filter: FilterNoPage;
  refreshHandlerCallback: (filter: FilterNoPage) => void;
}
export const TableFilters = ({
  filter,
  refreshHandlerCallback,
}: TableFiltersProps) => {
  const [id, setId] = useState(filter.Id ?? "");
  const [code, setCode] = useState(`${filter.Code ?? ""}`);
  const [valExact, setValExact] = useState(filter.ValueExact ?? "");
  const [valIncluded, setValIncluded] = useState(filter.ValueIncluded ?? "");
  const [perPage, setPerPage] = useState(`${filter.ItemsPerPage ?? ""}`);

  const refreshHandler = () => {
    const idObj = id ? { Id: id } : {};
    const codeObj = code ? { Code: Number.parseInt(code) } : {};
    const valIncludedObj = valIncluded ? { ValueIncluded: valIncluded } : {};
    const valExactObj = valExact ? { ValueExact: valExact } : {};
    const perPageObj = { ItemsPerPage: Number.parseInt(perPage) };

    const newState = {
      ...idObj,
      ...codeObj,
      ...valIncludedObj,
      ...valExactObj,
      ...perPageObj,
    } satisfies FilterNoPage;
    refreshHandlerCallback(newState);
  };

  return (
    <TableFiltersWrapper>
      <TableFilterItem key="id">
        <span>Id:</span>
        <TableFilterInput
          type="text"
          placeholder="Guid"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </TableFilterItem>

      <TableFilterItem key="code">
        <span>Код:</span>
        <TableFilterInput
          type="number"
          placeholder="1"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
      </TableFilterItem>

      <TableFilterItem key="valueIncluded">
        <span>Значение (Частичное вхождение):</span>
        <TableFilterInput
          type="text"
          placeholder="val"
          value={valIncluded}
          onChange={(e) => {
            setValIncluded(e.target.value);
          }}
        />
      </TableFilterItem>

      <TableFilterItem key="valueExact">
        <span>Значение (Точное совпадение):</span>
        <TableFilterInput
          type="text"
          placeholder="value1"
          value={valExact}
          onChange={(e) => {
            setValExact(e.target.value);
          }}
        />
      </TableFilterItem>

      <TableFilterItem key="PostsPerPage">
        <span>Элементов на странице:</span>
        <TableFilterInput
          type="number"
          min={1}
          placeholder="10"
          value={perPage}
          onChange={(e) => {
            setPerPage(e.target.value);
          }}
        />
      </TableFilterItem>

      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          refreshHandler();
        }}
      >
        Обновить
      </StyledButton>
    </TableFiltersWrapper>
  );
};
