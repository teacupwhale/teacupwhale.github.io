import React from "react";
import Layout from "../components/logo/Layout";

export default function AboutPage(): React.ReactElement {
  return (
    <Layout>
      <h1>About Teacup Whale</h1>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>About Teacup Whale</title>
    <meta name="description" content="Information about Teacup Whale, LLC" />
  </>
);
