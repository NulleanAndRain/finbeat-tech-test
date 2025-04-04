import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./ContentTableStyles";
import { CodeValueItem } from "../../types";

export interface TableProps {
  items?: Array<CodeValueItem>;
}
export const Table = ({ items }: TableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell $width="30%" key="id">
            Id
          </TableHeaderCell>
          <TableHeaderCell $width="20%" key="code">
            Код
          </TableHeaderCell>
          <TableHeaderCell $width="30%" key="value">
            Значение
          </TableHeaderCell>
          <TableHeaderCell $width="20%" key="order">
            Порядковый номер
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items && items.length ? (
          items.map((i, n) => (
            <TableRow key={`${i.id}_${n}`}>
              <TableCell key="id">{i.id}</TableCell>
              <TableCell key="code">{i.code}</TableCell>
              <TableCell key="value">{i.value}</TableCell>
              <TableCell key="order">{i.orderNumber}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow key="no-content">
            <TableCell colSpan={4}>Элементы не найдены</TableCell>
          </TableRow>
        )}
      </TableBody>
    </TableContainer>
  );
};
