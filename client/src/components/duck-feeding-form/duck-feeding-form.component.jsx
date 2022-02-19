import "./duck-feeding-form.styles.scss";
import React from "react";

// MaterialUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Component imports
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const DuckFeedingForm = ({ reRenderParent }) => {
  // For POST testing purposes
  const defaultValues = {
    _id: "",
    feedingLocation: "test",
    duckCount: 1,
    foodAmountKg: 1,
  };

  const [duckFormData, setDuckFormData] = React.useState({
    foodType: "",
    feedingTime: new Date(),
    ...defaultValues,
  });

  // Just logging to see if the state is correct, remove later
  React.useEffect(() => {
    console.log(duckFormData);
  }, [duckFormData]);

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
        reRenderParent();
      }
    };

    try {
      asyncCall();
    } catch (err) {
      console.log("API ERROR: " + err);
    }
  };

  const handleChange = (e) => {
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

  return (
    <div className="">
      <Box component="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="foodType"
          value={duckFormData.foodType}
          required
          label="Food"
          helperText="What food did you feed the ducks?"
          handleChange={handleChange}
        />
        <FormInput
          type="datePicker"
          name="feedingTime"
          value={duckFormData.feedingTime}
          required
          label="Feeding Time"
          dateTimePicker
          helperText="When did you feed the ducks?"
          handleChange={handleChange}
        />

        <CustomButton type="submit">Submit</CustomButton>
      </Box>
    </div>
  );
};

export default DuckFeedingForm;
