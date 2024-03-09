import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ postsPerPage, totalPosts, changePage }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (event, pageNumber) => {
    setActivePage(pageNumber);
    changePage(pageNumber);
  };

  return (
    <Pagination
      count={Math.ceil(totalPosts / postsPerPage)}
      page={activePage}
      onChange={handlePageChange}
      size="large"
      color="primary"
      sx={{ "& .MuiPaginationItem-root": { fontSize: "1.6rem" } }}
    />
  );
};

export default CustomPagination;
