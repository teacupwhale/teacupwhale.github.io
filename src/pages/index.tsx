import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Logo from "../components/logo/largeLogo.mdx";
import Introduction from "../components/introduction/introduction.mdx";
import Links from "../components/platform-link/Links";
import { Box, Card, Container, Flex, Heading } from "theme-ui";

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
          <Container>
            <Heading
              sx={{
                variant: "text.largeLogo",
              }}
            >
              moonless
              <div>studio</div>
            </Heading>
          </Container>
          <Card>
            <Introduction />
          </Card>
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
