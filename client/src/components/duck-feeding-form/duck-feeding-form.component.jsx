import "./duck-feeding-form.styles.scss";
import React from "react";

// MaterialUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Component imports
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const DuckFeedingForm = ({
  duckFormData,
  setDuckFormData,
  handleSubmit,
  margin,
  fullWidth,
  variant,
}) => {
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

    var intRegex = new RegExp(e.currentTarget.dataset.pattern);
    if (!intRegex.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormInput
        type="number"
        name="duckCount"
        data-pattern="[0-9]"
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
    </Box>
  );
};

export default DuckFeedingForm;
