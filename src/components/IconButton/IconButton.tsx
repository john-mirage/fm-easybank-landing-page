import { ReactNode } from "react";
import * as Styled from "./IconButton.style";

interface Props {
  className?: string;
  type: "button" | "submit" | "reset";
  label: string;
  children: ReactNode;
  onClick: () => void;
}

const IconButton = ({ className, type, label, children, onClick }: Props) => {
  return (
    <Styled.Button
      className={className}
      type={type}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};

export default IconButton;
