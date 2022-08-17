import { Button, ButtonProps } from "@mantine/core";

interface Props extends ButtonProps {
  uiStyleVariant?: ButtonStyleVariant;
}

export const CustomButton: React.FC<Props> = ({ uiStyleVariant, ...rest }) => {
  return <Button {...rest}>CustomButton</Button>;
};
