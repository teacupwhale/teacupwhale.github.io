import type { GatsbyConfig } from "gatsby";
const crimsonPro = "Crimson Pro";
const unna = "Unna";
const nunito = "Nunito";
const rubik = "Rubik";

const googleFonts: string[] = [crimsonPro, unna, nunito, rubik];
const config: GatsbyConfig = {
  siteMetadata: {
    title: `moonless`,
    siteUrl: `https://moonless.studio`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: "./src/components/",
      },
      __key: "components",
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "@theme-ui/preset-deep",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: "Noto Sans",
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400&display=swap`,
          },
          {
            name: "Amatic SC",
            file: `https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
