import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input required className="form-input" {...otherProps} />
      <label
        className={`form-input-label ${otherProps.value ? "shrink" : ""} `}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
