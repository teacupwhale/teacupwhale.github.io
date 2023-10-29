import { HeadFC } from "gatsby";
import React from "react";
import Fonts from "./fonts";
import Navigation from "../navigation/Navigation";

export type PassThroughChildren = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({
  children,
}: PassThroughChildren): React.ReactElement {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export const Heading: HeadFC = () => <Fonts />;
