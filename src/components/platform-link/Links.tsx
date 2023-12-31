import React from "react";
import PlatformLink, { Platform } from "./PlatformLink";
import { Card } from "theme-ui";
import Section from "../section/Section";

export default function Links(): React.ReactElement {
  return (
    <Section
      variant="flex.section"
      sx={{
        flexDirection: "column",
      }}
    >
      <PlatformLink platform={Platform.BLUESKY} />
      <PlatformLink platform={Platform.ARTSTATION} />
      <PlatformLink platform={Platform.DISCORD} />
      <PlatformLink platform={Platform.EMAIL} />
      <PlatformLink platform={Platform.KO_FI} />
      <PlatformLink platform={Platform.MASTODON} />
      <PlatformLink platform={Platform.PINTEREST} />
      <PlatformLink platform={Platform.TEEPUBLIC} />
      <PlatformLink platform={Platform.TUMBLR} />
      <PlatformLink platform={Platform.YOU_TUBE} />
    </Section>
  );
}
