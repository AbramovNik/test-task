import React from "react";
import { Pagination, PaginationItem } from "reactstrap";
import { Link } from "react-router-dom";

const TablePagination = ({ itemsPerPage, totalItems, onPageChanged }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Pagination className="pagination">
        {pageNumbers.map((number) => {
          return (
            <PaginationItem key={number} className="page-item">
              <Link
                to={{
                  search: `?_page=${number}`,
                }}
                onClick={() => onPageChanged(number)}
                className="page-link"
              >
                {number}
              </Link>
            </PaginationItem>
          );
        })}
      </Pagination>
    </div>
  );
};

export default TablePagination;
