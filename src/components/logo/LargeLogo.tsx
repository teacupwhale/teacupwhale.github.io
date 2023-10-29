import React from "react";
import Section from "../section/Section";
import { Heading } from "theme-ui";

export default function LargeLogo(): React.ReactElement {
  return (
    <Section>
      <div>
        <Heading
          sx={{
            variant: "text.largeLogo",
          }}
        >
          moonless
        </Heading>
        <Heading
          sx={{
            variant: "text.largeLogoSub",
          }}
        >
          studio
        </Heading>
      </div>
    </Section>
  );
}
