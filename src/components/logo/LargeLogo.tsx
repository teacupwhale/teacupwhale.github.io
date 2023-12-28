import React from "react";
import Section from "../section/Section";
import { Container, Heading, Box } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

export default function LargeLogo(): React.ReactElement {
  return (
    <Section variant="flex.hero">
      <Box>
        <StaticImage
          src="../../images/teacup-whale-logo-single-color.png"
          alt="Teacup Whale Logo"
          height={600}
        />
        <Heading>a game studio in Portland, Oregon</Heading>
      </Box>
    </Section>
  );
}
