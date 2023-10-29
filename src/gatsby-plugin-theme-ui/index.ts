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
  fontSizes: [12, 14, 16, 20, 24, 32, 128, 256],
  container: {
    sticky: {
      position: "sticky",
      zIndex: "100",
    },
  },
  flex: {
    hero: {
      minHeight: "100vh",
    },
    section: {
      alignItems: "center",
      minHeight: "90vh",
    },
  },
  text: {
    body: {
      textAlign: "left",
    },
    largeLogo: {
      fontSize: "16vw",
      color: "primary",
      textAlign: "center",
    },
    largeLogoSub: {
      fontSize: "6vw",
      color: "primary",
      textAlign: "right",
      top: "-0.45em",
      position: "relative",
    },
  },
  cards: {
    primary: {
      background: "#fff",
      width: "80%",
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
      padding: 4,
    },
    section: {
      background: "background",
    },
  },
  sizes: {
    container: {
      maxWidth: "80%",
    },
  },
  styles: {
    h1: {
      fontFamily: "fonts.heading",
    },
    p: {
      fontFamily: "body",
    },
  },
};

export default theme;
