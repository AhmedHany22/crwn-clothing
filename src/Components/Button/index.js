import {
  BaseBtn,
  GoogleBtn,
  InvertedBtn,
  LoadingSpinner,
} from "./Button.styles";

const BTN_TYPES = { base: BaseBtn, google: GoogleBtn, inverted: InvertedBtn };

const getBtn = (btnType = "base") => BTN_TYPES[btnType];

const Button = ({ children, btnType, isLoading = false, ...others }) => {
  const CustomBtn = getBtn(btnType);
  return (
    <CustomBtn
      disabled={isLoading}
      className={`button-container ${btnType ? BTN_TYPES[btnType] : ""}`}
      {...others}
    >
      <span>{isLoading ? <LoadingSpinner /> : children}</span>
    </CustomBtn>
  );
};

export default Button;
