import "./duck-feeding-form.styles.scss";
import React from "react";

// Component imports
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const DuckFeedingForm = () => {
  const [duckFormData, setDuckFormData] = React.useState({
    _id: "",
    feedingTime: null,
    foodType: "",
    feedingLocation: "",
    duckCount: 0,
    foodAmountKg: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(duckFormData);
  };

  const handleChange = (e) => {
    setDuckFormData({ [e.target.name]: e.target.value });
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
