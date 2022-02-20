import "./form-input.styles.scss";

// MaterialUI imports
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const FormInput = ({ handleChange, type, ...otherProps }) => {
  switch (type) {
    case "datePicker":
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...otherProps} {...props} />}
            onChange={handleChange}
            {...otherProps}
          />
        </LocalizationProvider>
      );
    default:
      return (
        <TextField
          type={type}
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
      );
  }
};

export default FormInput;
