import { HeadFC } from "gatsby";
import React from "react";
import Fonts from "./fonts";
import Navigation from "../navigation/Navigation";
import MailerLiteScript from "../vendor-scripts/MailerLite";

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
