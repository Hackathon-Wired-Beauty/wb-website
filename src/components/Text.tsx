import Typography from "@mui/material/Typography";
import "@fontsource/inter";
import { Colors } from "../utils/Colors";

type Component =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit"
  | undefined;

interface TextProps {
  children: React.ReactNode | string;
  style?: React.CSSProperties;
  color?: string;
  component: any;
  variant?: Component;
  size: string;
  weigth?: string;
  uppercase?: boolean;
  align: "left" | "right" | "center" | "justify";
}

export const Text = ({
  children,
  style,
  color,
  component,
  variant,
  size,
  weigth,
  uppercase,
  align,
}: TextProps) => {
  return (
    <Typography
      style={style}
      color={color ?? Colors.light.texts}
      component={component}
      variant={variant}
      fontSize={size}
      fontFamily="Inter"
      fontWeight={weigth ?? "200"}
      align={align}
      textTransform={uppercase ? "uppercase" : "none"}
    >
      {children}
    </Typography>
  );
};
