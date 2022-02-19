import "./duck-feeding-form.styles.scss";
import React from "react";

// Component imports
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const DuckFeedingForm = () => {
  // For POST testing purposes
  const defaultValues = {
    _id: "",
    feedingTime: Date.now(),
    feedingLocation: "test",
    duckCount: 1,
    foodAmountKg: 1,
  };

  const [duckFormData, setDuckFormData] = React.useState({
    foodType: "",
    ...defaultValues,
  });

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
      if (res.status === 200) console.log("POST successful");
    };

    try {
      asyncCall();
    } catch (err) {
      console.log("API ERROR: " + err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDuckFormData({ [name]: value, ...defaultValues });
  };

  return (
    <div className="">
      <h2>Add a new duck stat</h2>
      <span>Enter your duck feeding information below</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="foodType"
          value={duckFormData.foodType}
          required
          label="Food Type"
          handleChange={handleChange}
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default DuckFeedingForm;
