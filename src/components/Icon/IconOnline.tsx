import { SVGProps, Ref, forwardRef } from "react";
const SvgIconOnline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    ref={ref}
    {...props}
  >
    <defs>
      <linearGradient
        id="icon-online_svg__a"
        x1="0%"
        x2="99.58%"
        y1="0%"
        y2="99.58%"
      >
        <stop offset="0%" stopColor="#33D35E" />
        <stop offset="100%" stopColor="#2AB6D9" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={36} cy={36} r={36} fill="url(#icon-online_svg__a)" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M45.984 16a3.336 3.336 0 013.332 3.332v3.727l4.11 4.118a8.72 8.72 0 012.553 6.141v21.994a.666.666 0 01-.667.667H43.32a.666.666 0 01-.667-.667V48.84l-.382-.612a9.632 9.632 0 01-.83-8.553L25.799 45.7a3.332 3.332 0 01-4.307-1.91l-2.504-6.502A3.325 3.325 0 0116 33.99V19.332A3.336 3.336 0 0119.332 16zm8.662 33.316h-10.66v5.33h10.66v-5.33zm-7.996 1.332v1.333h-1.332v-1.333h1.332zm3.675-24.69l2.255 5.855a3.332 3.332 0 01-1.91 4.305l-.683.266 2.465 2.466-.942.942-10.618-10.615a2.222 2.222 0 00-3.209 3.073l5.46 5.957c.196.213.232.53.088.78a8.309 8.309 0 00.169 8.534l.289.462h10.957V33.318a7.379 7.379 0 00-2.162-5.198l-2.159-2.163zm-9.798 11.36H29.565v.004l-7.953 3.065 1.124 2.923a1.999 1.999 0 002.584 1.147l16.073-6.195-.866-.944zm-14.658.004h-5.44l.702 1.824 4.738-1.824zm20.115-19.99H19.332a2 2 0 00-2 2V33.99a2 2 0 002 2h19.974l-2.602-2.843a3.555 3.555 0 015.13-4.916l6.104 6.105c.025-.114.04-.23.045-.346V23.582l-.006-.015h.006v-4.235a2 2 0 00-1.999-2zm3.332 9.712v6.946a3.332 3.332 0 01-.282 1.333l1.156-.446a1.999 1.999 0 001.148-2.584l-2.022-5.25zm-27.32 4.281v1.333h-2.664v-1.333h2.665zm11.994 0v1.333h-2.665v-1.333h2.665zm-11.993-3.998v1.333h-2.665v-1.333h2.665zm3.998 0v1.333h-2.666v-1.333h2.666zm3.998 0v1.333h-2.666v-1.333h2.666zm3.997 0v1.333h-2.665v-1.333h2.665zm-10.394-8.662c.957 0 1.732.776 1.732 1.733v3.198c0 .957-.775 1.732-1.732 1.732h-3.198a1.732 1.732 0 01-1.733-1.732v-3.198c0-.957.776-1.733 1.733-1.733zm0 1.333h-3.198a.4.4 0 00-.4.4v.932h1.332v1.333h-1.332v.933c0 .22.179.4.4.4h3.198a.4.4 0 00.4-.4v-.933h-1.333V21.33h1.333v-.932a.4.4 0 00-.4-.4zm21.722-.666v1.998h-1.333v-1.998h1.333zm-2.666 0v1.998H41.32v-1.998h1.332zm-2.665 0v1.998h-1.332v-1.998h1.332zm-2.665 0v1.998h-1.333v-1.998h1.333z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgIconOnline);
export default ForwardRef;
