// Asset imports
import "./form-panel.styles.scss";

// Component imports
import Form from "../form/form.component";
import React from "react";

// Material UI imports
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const FormPanel = ({ handleRerender }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className="upper-panel">
      <div className="text-area">
        <div className="panel-header">
          <h3>Entries</h3>
        </div>
        <div className="panel-text">
          <p>
            I am a scientist who is trying to understand how ducks are being fed
            in parks around the world. Please help me with my research and add
            your most recent duck feeding experience.
          </p>
        </div>
      </div>
      <div className="button-area">
        <Button
          variant="contained"
          color="warning"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#e7aa30",
            "&:hover": { backgroundColor: "#ffd634" },
          }}
        >
          Add Entry
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Entry</DialogTitle>
          <Form
            margin="dense"
            fullWidth
            variant="standard"
            handleRerender={handleRerender}
            handleClose={handleClose}
          />
        </Dialog>
      </div>
    </Paper>
  );
};

export default FormPanel;
