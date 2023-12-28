import React from "react";
import Layout from "../components/logo/Layout";

export default function AboutPage(): React.ReactElement {
  return (
    <Layout>
      <h1>About moonless</h1>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>About moonless</title>
    <meta name="description" content="Information about Moonless, LLC" />
  </>
);
