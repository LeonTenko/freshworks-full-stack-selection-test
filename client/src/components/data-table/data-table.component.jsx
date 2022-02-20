// Asset imports
import "./data-table.styles.scss";

// Component imports
import React from "react";
import DuckFeedingItem from "../duck-feeding-item/duck-feeding-item.component";

// MaterialUI imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

const DataTable = ({ duckData }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer sx={{ maxHeight: "70vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Ducks</TableCell>
              <TableCell align="right">Food</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Date/Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {duckData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ _id, ...otherProps }) => (
                <DuckFeedingItem
                  key={_id}
                  _id={_id}
                  align="right"
                  {...otherProps}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={duckData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
