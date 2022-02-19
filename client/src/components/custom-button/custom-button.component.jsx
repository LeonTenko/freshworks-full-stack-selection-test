import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
