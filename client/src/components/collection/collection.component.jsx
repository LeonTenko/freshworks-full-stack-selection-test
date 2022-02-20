// Asset imiports
import "./collection.styles.scss";

// Component imports
import React from "react";
import FormPanel from "../form-panel/form-panel.component";
import DataTable from "../data-table/data-table.component";

// MaterialUI imports
import Paper from "@mui/material/Paper";

const Collection = () => {
  const [duckData, setDuckData] = React.useState([]);
  const [reRender, setReRender] = React.useState(false);

  // Trigger re-render every time someone adds a new
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
      <FormPanel handleRerender={handleRerender} l />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {duckData ? (
          <DataTable duckData={duckData} />
        ) : (
          <h3>The database is empty, please add some entries.</h3>
        )}
      </Paper>
    </div>
  );
};

export default Collection;
