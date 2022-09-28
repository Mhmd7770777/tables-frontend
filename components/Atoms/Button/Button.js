import { StyleButton } from "./style";

const Button = ({
  backgroundColor,
  borderStyle,
  borderRadius,
  borderColor,
  borderWidth,
  padding,
  margin,

  className,
  children,
}) => {
  return (
    <StyleButton
      $backgroundColor={backgroundColor}
      $borderStyle={borderStyle}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $borderWidth={borderWidth}
      $padding={padding}
      $margin={margin}
      className={`atom-button ${className ?? ""}`}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
