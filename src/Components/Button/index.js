import { BaseBtn, GoogleBtn, InvertedBtn } from "./Button.styles";

const BTN_TYPES = { base: BaseBtn, google: GoogleBtn, inverted: InvertedBtn };

const getBtn = (btnType = "base") => BTN_TYPES[btnType];

const Button = ({ children, btnType, ...others }) => {
  const CustomBtn = getBtn(btnType);
  return (
    <CustomBtn
      className={`button-container ${btnType ? BTN_TYPES[btnType] : ""}`}
      {...others}
    >
      <span>{children}</span>
    </CustomBtn>
  );
};

export default Button;
