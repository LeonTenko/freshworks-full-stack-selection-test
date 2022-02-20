import React from "react";
import "./collection.styles.scss";

// Component imports
import DuckFeedingItem from "../duck-feeding-item/duck-feeding-item.component";
import DuckFeedingForm from "../duck-feeding-form/duck-feeding-form.component";
import UpperPanel from "../upper-panel/upper-panel.component";

// MaterialUI imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

const Collection = () => {
  const [duckData, setDuckData] = React.useState([]);
  const [reRender, setReRender] = React.useState(false);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  // Tritter re-render every time someone adds a new
  // duck feeding entry
  const handleRerender = () => {
    setReRender(!reRender);
  };

  React.useEffect(() => {
    getDuckData();
  }, [reRender]);

  const getDuckData = async () => {
    const res = await fetch("/api/duckfeedings");

    try {
      const data = await res.json();
      console.log(data);
      setDuckData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <UpperPanel></UpperPanel>
      <DuckFeedingForm reRenderParent={handleRerender} />

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {duckData ? (
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
        ) : (
          <h3>The database is empty, please add some entries.</h3>
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={duckData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Collection;
