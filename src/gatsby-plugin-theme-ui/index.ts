import themeUiPresetDark from "@theme-ui/preset-dark";
import { merge } from "theme-ui";

// {"Light coral":"f47175","Ultra Violet":"5f5aa2","Pale purple":"e8d7f1","Night":"0a100d","Celadon":"aef6c7"}
const theme = {
  colors: {
    text: "#222",
    background: "#545AA2",
    primary: "#E8D7F1",
    secondary: "#F47175",
    accent: "#AEF6C7",
    highlight: "#545AA2",
    muted: "hsl(353, 40%, 96%)",
    lightText: "#FFF",
  },
  fonts: {
    body: "sans-serif",
    heading: "Crimson Pro, serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 96],
  text: {
    body: {
      textAlign: "left",
    },
    largeLogo: {
      fontSize: 7,
      color: "lightText",
      textAlign: "center",
      padding: 6,
    },
  },
  cards: {
    primary: {
      background: "#fff",
      width: "80%",
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
      padding: 4,
    },
  },
  sizes: {
    container: {
      maxWidth: "80%",
    },
  },
  styles: {
    h1: {
      fontFamily: "heading",
    },
    p: {
      fontFamily: "body",
    },
  },
};

export default theme;
