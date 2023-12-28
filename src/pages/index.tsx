import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/logo/Layout";
import Links from "../components/platform-link/Links";
import { Flex } from "theme-ui";
import LargeLogo from "../components/logo/largeLogo";
import Introduction from "../components/introduction/Introduction";

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
          <Introduction />
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
