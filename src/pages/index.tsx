import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Logo from "../components/logo/largeLogo.mdx";
import Introduction from "../components/introduction/introduction.mdx";
import Links from "../components/platform-link/Links";
import { Box, Card, Container, Flex, Heading } from "theme-ui";
import Section from "../components/section/Section";
import LargeLogo from "../components/logo/largeLogo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeLogo />
          <Section variant="flex.section">
            <Card variant="card.section" sx={{ margin: "auto" }}>
              <Introduction />
            </Card>
          </Section>
          <Links />
        </Flex>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
  </>
);
