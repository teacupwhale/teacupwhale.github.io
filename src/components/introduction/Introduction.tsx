import React from "react";
import Section from "../section/Section";
import { Box, Card, Heading } from "theme-ui";
import IntroductionCopy from "./introductionCopy.mdx";
import EmailSignUpForm from "../email-sign-up-form/EmailSignUpForm";

export default function Introduction(): React.ReactElement {
  return (
    <>
      <Section variant="flex.sectionPrimary">
        <Box sx={{ margin: "auto" }}>
          <Card>
            <Heading as="h1" variant="heading.primary">
              do NPCs dream
              <br />
              of non-player sheep?
            </Heading>
            <IntroductionCopy />
          </Card>
          <EmailSignUpForm />
        </Box>
      </Section>
    </>
  );
}
