import React from "react";
import Section from "../section/Section";
import { Box, Heading } from "theme-ui";
import IntroductionCopy from "./introductionCopy.mdx";
import EmailSignUpForm from "../email-sign-up-form/EmailSignUpForm";

export default function Introduction(): React.ReactElement {
  return (
    <>
      <Section variant="flex.sectionPrimary">
        <Box sx={{ margin: "auto" }}>
          <Heading>Do NPCs dream of non-player sheep?</Heading>
          <IntroductionCopy />
        </Box>
      </Section>
      <Section variant="flex.sectionPrimary">
        <EmailSignUpForm />
      </Section>
    </>
  );
}
