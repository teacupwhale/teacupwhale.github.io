import themeUiPresetDark from "@theme-ui/preset-dark";
import { merge } from "theme-ui";

// {"Light coral":"f47175","Ultra Violet":"5f5aa2","Pale purple":"e8d7f1","Night":"0a100d","Celadon":"aef6c7"}
const theme = {
  colors: {
    text: "#222",
    background: "#2E1A2C;",
    primary: "#FFF",
    secondary: "#FFF",
    accent: "#AEF6C7",
    highlight: "#545AA2",
    muted: "hsl(353, 40%, 96%)",
    lightText: "#FFF",
  },
  fonts: {
    body: "'Noto Sans', Rubik, sans-serif",
    heading: "'Amatic SC', 'Crimson Pro', serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 128, 256],
  fontWeights: {
    body: 400,
    heading: 400,
  },
  container: {
    sticky: {
      position: "sticky",
      zIndex: "100",
    },
  },
  flex: {
    hero: {
      minHeight: "60vh",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: "primary",
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      minHeight: "60vh",
      width: "100%",
    },
    sectionPrimary: {
      color: "primary",
      alignItems: "center",
      minHeight: "60vh",
      width: "100%",
      justifyContent: "center",
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
    largeLogoSecondary: {
      fontSize: "10vw",
      color: "primary",
      textAlign: "left",
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
      background: "primary",
      width: "60vw",
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
      padding: 4,
      margin: "1em",
    },
    section: {
      background: "primary",
      color: "background",
      fontSize: 3,
      padding: 4,
      height: "100%",
      width: "100%",
    },
  },
  box: {
    filled: {
      border: "3px solid black",
      background: "#FFF",
      width: 16,
      height: 16,
      boxSizing: "content-box",
    },
    empty: {
      border: "none",
      background: "#555",
      width: 16,
      height: 16,
      boxSizing: "content-box",
    },
  },
  sizes: {
    container: {
      maxWidth: "80%",
    },
  },
  styles: {
    root: {
      padding: 0,
    },
    h1: {
      fontFamily: "heading",
    },
    p: {
      fontFamily: "body",
      fontSize: 3,
      fontWeight: "body",
    },
  },
};

export default theme;
