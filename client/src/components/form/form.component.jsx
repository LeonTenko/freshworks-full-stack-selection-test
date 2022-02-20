// Asset imports
import "./form.styles.scss";

// Component imports
import React from "react";
import FormInput from "../form-input/form-input.component";

// MaterialUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const Form = ({ margin, fullWidth, variant, handleRerender, handleClose }) => {
  const defaultFormValues = {
    _id: "",
    foodType: "",
    duckCount: "",
    foodAmountKg: "",
    feedingLocation: "",
    feedingTime: null,
  };
  const [duckFormData, setDuckFormData] = React.useState(defaultFormValues);

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

  const handleChange = (e) => {
    // Otherwise date picker throws an error if the focus is lost
    if (!e) return;

    let name = "";
    let value = "";

    if (e.target) {
      name = e.target.name;
      value = e.target.value;
    } else {
      // Date picker works directly with value and not e.target
      name = "feedingTime";
      value = e;
    }

    setDuckFormData({ ...duckFormData, [name]: value });
  };

  // Allow only inputs within specified pattern
  // Only INT for ducks in our case
  const handleValidation = (e) => {
    let key = "";
    e.type === "paste"
      ? (key = e.clipboardData.getData("text/plain"))
      : (key = e.key);

    const newValue = e.target.value + key;
    const pattern = e.currentTarget.dataset.pattern;
    var intRegex = new RegExp(pattern);

    if (!intRegex.test(newValue)) {
      e.preventDefault();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <DialogContent>
        <DialogContentText>
          Please fill out the relevant form fields below and click "Submit".
          Thank you for helping me with my research!
        </DialogContentText>
        <FormInput
          type="number"
          name="duckCount"
          data-pattern="^[1-9]\d*$"
          onKeyPress={handleValidation}
          onPaste={handleValidation}
          value={duckFormData.duckCount}
          required
          label="Number of Ducks"
          helperText="How many ducks did you feed?"
          handleChange={handleChange}
          margin={margin}
          fullWidth={fullWidth}
          variant={variant}
        />
        <FormInput
          type="text"
          name="foodType"
          value={duckFormData.foodType}
          required
          label="Food"
          helperText="What food did you feed the ducks?"
          handleChange={handleChange}
          margin={margin}
          fullWidth={fullWidth}
          variant={variant}
        />
        <FormInput
          type="number"
          name="foodAmountKg"
          data-pattern="^[1-9]\d*\.?\d*$"
          onKeyPress={handleValidation}
          onPaste={handleValidation}
          value={duckFormData.foodAmountKg}
          required
          label="Amount of Food (KG)"
          helperText="How much food did you feed the ducks (KG)?"
          handleChange={handleChange}
          margin={margin}
          fullWidth={fullWidth}
          variant={variant}
        />
        <FormInput
          type="text"
          name="feedingLocation"
          value={duckFormData.feedingLocation}
          required
          label="Location"
          helperText="Where did you feed the ducks?"
          handleChange={handleChange}
          margin={margin}
          fullWidth={fullWidth}
          variant={variant}
        />
        <FormInput
          type="datePicker"
          name="feedingTime"
          value={duckFormData.feedingTime}
          required
          label="Date/Time"
          helperText="When did you feed the ducks?"
          handleChange={handleChange}
          margin={margin}
          fullWidth={fullWidth}
          variant={variant}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Box>
  );
};

export default Form;
