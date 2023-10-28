import React from "react";
import { Card, Flex, Heading } from "theme-ui";
import Layout from "../components/layout/Layout";

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
          <iframe
            frameborder="0"
            src="https://itch.io/embed-upload/3096649?color=333333"
            allowfullscreen=""
            width="960"
            height="620"
          >
            <a href="https://minimalocean.itch.io/furniturator">
              Play Furniturator on itch.io
            </a>
          </iframe>
        </Card>
        <Card>
          <Heading>Spoopy Plumpkins</Heading>
          <iframe
            frameborder="0"
            src="https://itch.io/embed-upload/2947112?color=000000"
            allowfullscreen=""
            width="660"
            height="478"
          >
            <a href="https://minimalocean.itch.io/spoopy-plumpkins">
              Play Spoopy Plumpkins on itch.io
            </a>
          </iframe>
        </Card>
      </Flex>
    </Layout>
  );
}
