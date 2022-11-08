const FONT_ROOT = 16;
const FONT_STACK = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const theme = {
  color: {
    background: "#212529",
  },
  font: {
    root: FONT_ROOT,
    stack: FONT_STACK.join(","),
  },
  screen: {
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  pxToRem: (px: number) => `${String(px / FONT_ROOT)}rem`,
};

export default theme;
