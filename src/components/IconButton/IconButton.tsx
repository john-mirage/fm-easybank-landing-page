import { ReactNode } from "react";
import * as Styled from "./IconButton.style";

interface Props {
  className?: string;
  children: ReactNode;
}

const IconButton = ({ className, children }: Props) => {
  return <Styled.Button className={className}>{children}</Styled.Button>;
};

export default IconButton;
