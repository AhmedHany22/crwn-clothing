import Styles from "./FormInput.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Styles.Group>
      <Styles.Input required {...otherProps} />
      <Styles.InputLabel shrink={otherProps.value}>{label}</Styles.InputLabel>
    </Styles.Group>
  );
};

export default FormInput;
