import { ReactNode } from "react";
import * as Styled from "./Button.style";

interface Props {
  className?: string;
  type: "button" | "submit" | "reset";
  children: ReactNode;
}

const Button = ({ className, type, children }: Props) => {
  return (
    <Styled.Button className={className} type={type}>
      {children}
    </Styled.Button>
  );
};

export default Button;
