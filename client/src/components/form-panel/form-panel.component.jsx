import React from "react";
import "./form-panel.styles.scss";

// Component imports
import DuckFeedingForm from "../duck-feeding-form/duck-feeding-form.component";

// Material UI imports
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormPanel = ({ handleRerender }) => {
  const defaultFormValues = {
    _id: "",
    foodType: "",
    duckCount: "",
    foodAmountKg: "",
    feedingLocation: "",
    feedingTime: null,
  };

  const [open, setOpen] = React.useState(false);
  const [duckFormData, setDuckFormData] = React.useState(defaultFormValues);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(duckFormData);

    // POST to api/duckfeedings
    var body = JSON.stringify(duckFormData);

    const asyncCall = async () => {
      const res = await fetch("/api/duckfeedings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: body,
      });
      if (res.status === 200) {
        console.log("POST successful");
        handleRerender();
        handleClose();
        setDuckFormData(defaultFormValues);
      }
    };

    try {
      asyncCall();
    } catch (err) {
      console.log("API ERROR: " + err);
    }
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
            in parks around the world. Please aid my research and submit your
            most recent duck feeding experience.
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
          <DialogContent>
            <DialogContentText>
              Please fill out the relevant form fields below and click "Add".
              Thank you for helping me with my research!
            </DialogContentText>
            <DuckFeedingForm
              duckFormData={duckFormData}
              setDuckFormData={setDuckFormData}
              margin="dense"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Paper>
  );
};

export default FormPanel;
