import React, { Fragment, useCallback } from "react";
import {
  PaginationButton,
  PaginationCell,
  PaginationContainer,
} from "./ContentTableStyles";

export interface TablePaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageCount: number;
}
export const TablePagination = ({
  currentPage,
  setCurrentPage,
  pageCount,
}: TablePaginationProps) => {
  const selectPageHandler = useCallback(
    (value: number) => {
      setCurrentPage(value);
    },
    [setCurrentPage]
  );

  const previousPageHandler = useCallback(() => {
    const prevPage = Math.max(1, currentPage - 1);
    setCurrentPage(prevPage);
  }, [currentPage]);

  const nextPageHandler = useCallback(() => {
    const nextPage = Math.min(pageCount, currentPage + 1);
    setCurrentPage(nextPage);
  }, [currentPage, pageCount]);

  const maxCells = 7;
  const displayCells = Math.min(pageCount, maxCells);

  const brakeMinOffset = Math.ceil(maxCells / 2) + 1;
  const hasAllCells = displayCells === maxCells;

  const displayLeftBrake = hasAllCells && currentPage >= brakeMinOffset;
  const displayRightBrake =
    hasAllCells && currentPage <= pageCount - brakeMinOffset + 1;

  const renderPageButtons = () => {
    if (!hasAllCells) {
      return Array.from({ length: displayCells }).map((_n, i0) => {
        const i = i0 + 1;
        return (
          <Fragment key={i}>
            <PaginationCell>
              <PaginationButton
                disabled={currentPage === i}
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(i);
                }}
                value={i}
              >
                {i}
              </PaginationButton>
            </PaginationCell>
          </Fragment>
        );
      });
    } else {
      if (displayLeftBrake && displayRightBrake) {
        return [
          <Fragment key={"firstPage"}>
            <PaginationCell>
              <PaginationButton
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(1);
                }}
                value={1}
              >
                {1}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,
          <Fragment key={"lbrake"}>
            <PaginationCell>...</PaginationCell>
          </Fragment>,

          <Fragment key={"current-1"}>
            <PaginationCell>
              <PaginationButton
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(currentPage - 1);
                }}
                value={currentPage - 1}
              >
                {currentPage - 1}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,
          <Fragment key={"current"}>
            <PaginationCell>
              <PaginationButton disabled value={currentPage}>
                {currentPage}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,
          <Fragment key={"current+1"}>
            <PaginationCell>
              <PaginationButton
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(currentPage + 1);
                }}
                value={currentPage + 1}
              >
                {currentPage + 1}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,

          <Fragment key={"rbrake"}>
            <PaginationCell>...</PaginationCell>
          </Fragment>,
          <Fragment key={"lastPage"}>
            <PaginationCell>
              <PaginationButton
                disabled={currentPage === pageCount}
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(pageCount);
                }}
                value={pageCount}
              >
                {pageCount}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,
        ];
      } else if (!displayLeftBrake) {
        return Array.from({ length: displayCells - 2 })
          .map((_n, i0) => {
            const i = i0 + 1;
            return (
              <Fragment key={i}>
                <PaginationCell>
                  <PaginationButton
                    disabled={currentPage === i}
                    onClick={(e) => {
                      e.preventDefault();
                      selectPageHandler(i);
                    }}
                    value={i}
                  >
                    {i}
                  </PaginationButton>
                </PaginationCell>
              </Fragment>
            );
          })
          .concat([
            <Fragment key={"rbrake"}>
              <PaginationCell>...</PaginationCell>
            </Fragment>,
            <Fragment key={"lastPage"}>
              <PaginationCell>
                <PaginationButton
                  disabled={currentPage === pageCount}
                  onClick={(e) => {
                    e.preventDefault();
                    selectPageHandler(pageCount);
                  }}
                  value={pageCount}
                >
                  {pageCount}
                </PaginationButton>
              </PaginationCell>
            </Fragment>,
          ]);
      } else if (!displayRightBrake) {
        return [
          <Fragment key={"firstPage"}>
            <PaginationCell>
              <PaginationButton
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  selectPageHandler(1);
                }}
                value={1}
              >
                {1}
              </PaginationButton>
            </PaginationCell>
          </Fragment>,
          <Fragment key={"lbrake"}>
            <PaginationCell>...</PaginationCell>
          </Fragment>,
        ].concat(
          Array.from({ length: displayCells - 2 }).map((_n, i0) => {
            const i = i0 + 3 + pageCount - displayCells;
            return (
              <Fragment key={i}>
                <PaginationCell>
                  <PaginationButton
                    disabled={currentPage === i}
                    onClick={(e) => {
                      e.preventDefault();
                      selectPageHandler(i);
                    }}
                    value={i}
                  >
                    {i}
                  </PaginationButton>
                </PaginationCell>
              </Fragment>
            );
          })
        );
      }
    }
  };

  return (
    <PaginationContainer>
      <PaginationCell key={"prev"}>
        <PaginationButton
          onClick={(e) => {
            e.preventDefault();
            previousPageHandler();
          }}
          disabled={currentPage === 1}
        >
          {"<"}
        </PaginationButton>
      </PaginationCell>
      {renderPageButtons()}
      <PaginationCell key={"next"}>
        <PaginationButton
          onClick={(e) => {
            e.preventDefault();
            nextPageHandler();
          }}
          disabled={currentPage === pageCount}
        >
          {">"}
        </PaginationButton>
      </PaginationCell>
    </PaginationContainer>
  );
};
