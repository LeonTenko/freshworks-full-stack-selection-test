import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="">
    <input
      onChange={handleChange}
      type="text"
      className="form-input"
      {...otherProps}
    />
    {label ? <label className="">{label}</label> : null}
  </div>
);

export default FormInput;
