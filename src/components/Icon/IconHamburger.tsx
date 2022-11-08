import { SVGProps, Ref, forwardRef } from "react";
const SvgIconHamburger = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 11"
    ref={ref}
    {...props}
  >
    <g fill="#2D314D" fillRule="evenodd">
      <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgIconHamburger);
export default ForwardRef;
