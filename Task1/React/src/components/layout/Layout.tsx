import React from "react";
import { BreakLine, LayoutWrapper } from "./LayoutStyles";
import { UpdateDataForm } from "../update-data-form/UpdateDataForm";
import { ContentTable } from "../table/ContentTable";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <UpdateDataForm />
      <BreakLine />
      <ContentTable />
    </LayoutWrapper>
  );
};
