import { ReactNode } from "react";
import * as Styled from "./IconButton.style";

interface Props {
  className?: string;
  type: "button" | "submit" | "reset";
  label: string;
  children: ReactNode;
}

const IconButton = ({ className, type, label, children }: Props) => {
  return (
    <Styled.Button className={className} type={type} aria-label={label}>
      {children}
    </Styled.Button>
  );
};

export default IconButton;
