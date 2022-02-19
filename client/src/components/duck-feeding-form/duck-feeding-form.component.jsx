import "./duck-feeding-form.styles.scss";

// Component imports
import FormInput from "../form-input/form-input.component";

const DuckFeedingForm = () => (
  <div className="">
    <h2>Add a new duck stat</h2>
    <span>Enter your duck feeding information below</span>

    <form
      action=""
      onSubmit={() => {
        console.log("Test");
      }}
    >
      <FormInput
        type="text"
        name=""
        value=""
        required
        label=""
        handleChange={() => {
          console.log("Test");
        }}
      />
    </form>
  </div>
);

export default DuckFeedingForm;
