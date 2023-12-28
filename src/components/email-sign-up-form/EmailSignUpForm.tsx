import React from "react";
import { Box, Container, Flex, Heading } from "theme-ui";

export default function EmailSignUpForm(): React.ReactElement {
  return (
    <Container>
      <Flex variant="flex.email">
        <Box variant="box.email">
          <Heading as="h2" variant="heading.h2">
            email newsletter
          </Heading>
          Hear the latest progress and playtest opportunities!
          <div className="ml-embedded" data-form="wESZg5"></div>
        </Box>
      </Flex>
    </Container>
  );
}
