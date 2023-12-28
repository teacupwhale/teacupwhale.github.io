import { HeadFC } from "gatsby";
import React from "react";
import Fonts from "../layout/fonts";
import MailerLiteScript from "../vendor-scripts/MailerLite";
import Footer from "../footer/footer";

export type PassThroughChildren = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({
  children,
}: PassThroughChildren): React.ReactElement {
  return (
    <>
      <MailerLiteScript />
      {children}
      <Footer />
    </>
  );
}

export const Heading: HeadFC = () => {
  return (
    <>
      <Fonts />
    </>
  );
};
