import "./Button.styles.scss";

const BTN_TYPES = { google: "google-sign-in", inverted: "inverted" };

const Button = ({ children, btnType, ...others }) => {
  return (
    <button
      className={`button-container ${btnType ? BTN_TYPES[btnType] : ""}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;