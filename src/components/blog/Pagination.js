import React from "react";

function Pagination({ postPerpage, totalPosts, paginate, currentPage }) {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerpage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="page-numbers">
      <ul>
        {pageNumber.map((number) => (
          <li
            className={number === currentPage ? "active-page" : ""}
            onClick={() => {
              paginate(number);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            key={number}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
