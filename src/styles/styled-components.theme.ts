const FONT_ROOT = 16;
const FONT_STACK = [
  "Public Sans",
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
    background: "hsl(0, 0%, 98%)",
    darkBlue: "hsl(233, 26%, 24%)",
    limeGreen: "hsl(136, 65%, 51%)",
    brightCyan: "hsl(192, 70%, 51%)",
    grayishBlue: "hsl(220, 16%, 96%)",
    lightGrayishBlue: "hsl(220, 16%, 96%)",
    veryLightGray: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
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
