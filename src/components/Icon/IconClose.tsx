import { SVGProps, Ref, forwardRef } from "react";
const SvgIconClose = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 19"
    ref={ref}
    {...props}
  >
    <g fill="#2D314D" fillRule="evenodd">
      <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
      <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgIconClose);
export default ForwardRef;
