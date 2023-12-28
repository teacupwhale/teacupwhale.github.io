import themeUiPresetDark from "@theme-ui/preset-dark";
import { merge } from "theme-ui";

// {"Light coral":"f47175","Ultra Violet":"5f5aa2","Pale purple":"e8d7f1","Night":"0a100d","Celadon":"aef6c7"}
const theme = {
  // Scales
  colors: {
    text: "#222",
    background: "#2E1A2C",
    primary: "#E5BEED",
    secondary: "#312A40",
    accent: "#AEF6C7",
    highlight: "#545AA2",
    muted: "hsl(353, 40%, 96%)",
    lightText: "#FFF",
  },
  fonts: {
    body: "'Noto Sans', Rubik, sans-serif",
    heading: "'Amatic SC', 'Crimson Pro', serif",
    monospace: "serif",
  },
  fontSizes: [12, 14, 16, 18, 24, 48, 80, 256],
  fontWeights: {
    body: 400,
    heading: 400,
  },
  // Variants
  container: {
    sticky: {
      position: "sticky",
      zIndex: "100",
    },
  },
  flex: {
    hero: {
      minHeight: "40vh",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: "primary",
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      minHeight: "40vh",
      width: "100%",
    },
    sectionPrimary: {
      color: "primary",
      alignItems: "center",
      minHeight: "40vh",
      width: "100%",
    },
    email: {
      justifyContent: "center",
    },
    footer: {
      justifyContent: "space-between",
      fontSize: 1,
      fontWeight: 100,
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
      background: "background",
      maxWidth: "800px",
      // boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
      padding: 4,
      margin: "1em",
      color: "primary",
    },
    section: {
      background: "primary",
      color: "background",
      fontSize: 3,
      padding: 4,
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
    email: {
      maxWidth: "400px",
      fontFamily: "'Noto Sans', 'Crimson Pro', serif",
    },
    footer: {
      background: "secondary",
      marginTop: "5em",
      padding: "8px",
      color: "primary",
      fontFamily: "'Noto Sans', 'Crimson Pro', serif",
    },
  },
  link: {
    footer: {
      color: "primary",
    },
  },
  sizes: {
    container: {
      maxWidth: "80%",
    },
  },
  heading: {
    primary: {
      fontSize: 6,
      textAlign: "center",
      color: "primary",
    },
    h2: {
      fontSize: 5,
    },
    subheading: {
      fontFamily: "'Noto Sans', 'Crimson Pro', serif",
      fontWeight: 100,
      fontSize: 3,
      color: "primary",
    },
  },
  styles: {
    root: {
      padding: 0,
    },
    h1: {
      fontFamily: "heading",
      fontSize: 7,
    },
    h2: {
      fontSize: 3,
    },
    h3: {
      fontFamily: "subheading.heading",
    },
    p: {
      fontFamily: "body",
      fontSize: 3,
      fontWeight: "body",
    },
    ".ml-form-embedWrapper": {
      background: "background",
    },
  },
};

export default theme;
