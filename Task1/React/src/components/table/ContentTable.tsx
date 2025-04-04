import React, { useEffect, useState } from "react";
import { TableFilters } from "./TableFilters";
import { TablePagination } from "./TablePagination";
import { Table } from "./Table";
import { CodeValueItem, FilterNoPage } from "../../types";
import { getItems, getPagesCount } from "../../utils/api";
import { ContentTableWrapper } from "./ContentTableStyles";

export const ContentTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPageInitial = 10;
  const [filter, setFilter] = useState({
    ItemsPerPage: itemsPerPageInitial,
  } as FilterNoPage);

  const [pageCount, setPageCount] = useState(1);

  const [currentDisplayingItems, setCurrentDisplayingItems] = useState(
    [] as Array<CodeValueItem>
  );

  const refreshHandlerCallback = (filter: FilterNoPage) => {
    setFilter(filter);
  };

  useEffect(() => {
    getItems({ ...filter, Page: currentPage })
      .then((items) => {
        setCurrentDisplayingItems(items);
      })
      .catch(console.error);
  }, [currentPage, filter]);

  useEffect(() => {
    getPagesCount(filter)
      .then((pages) => {
        setPageCount(pages);
      })
      .catch(console.error);
    setCurrentPage(1);
  }, [filter]);

  return (
    <ContentTableWrapper>
      <TableFilters
        filter={filter}
        refreshHandlerCallback={refreshHandlerCallback}
      />
      <Table items={currentDisplayingItems} />
      <TablePagination
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
    </ContentTableWrapper>
  );
};
