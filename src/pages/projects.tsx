import React from "react";
import { Card, Flex, Heading, Embed } from "theme-ui";
import Layout from "../components/logo/Layout";

export default function Projects(): React.ReactElement {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card>
          <Heading>Furniturator</Heading>
          <Embed
            src="https://itch.io/embed-upload/3096649?color=333333"
            allowFullScreen={true}
            width="960"
            height="620"
          >
            <a href="https://minimalocean.itch.io/furniturator">
              Play Furniturator on itch.io
            </a>
          </Embed>
        </Card>
        <Card>
          <Heading>Spoopy Plumpkins</Heading>
          <Embed
            src="https://itch.io/embed-upload/2947112?color=000000"
            allowFullScreen={true}
            width="660"
            height="478"
          >
            <a href="https://minimalocean.itch.io/spoopy-plumpkins">
              Play Spoopy Plumpkins on itch.io
            </a>
          </Embed>
        </Card>
      </Flex>
    </Layout>
  );
}
