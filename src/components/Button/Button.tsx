import { ReactNode } from "react";
import * as Styled from "./Button.style";

interface Props {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children }: Props) => {
  return <Styled.Button className={className}>{children}</Styled.Button>;
};

export default Button;
