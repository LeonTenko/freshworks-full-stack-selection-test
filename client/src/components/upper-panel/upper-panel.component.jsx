import "./upper-panel.styles.scss";

// Material UI imports
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const UpperPanel = () => {
  return (
    <Paper className="upper-panel">
      <div className="text-area">
        <div className="panel-header">
          <h3>Test</h3>
        </div>
        <div className="panel-text">
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="button-area">
        <Button
          variant="contained"
          color="warning"
          sx={{
            backgroundColor: "#e7aa30",
            "&:hover": { backgroundColor: "#ffd634" },
          }}
        >
          Add Entry
        </Button>
      </div>
    </Paper>
  );
};

export default UpperPanel;
