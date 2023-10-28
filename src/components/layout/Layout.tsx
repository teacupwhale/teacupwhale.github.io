import { HeadFC } from "gatsby";
import React from "react";
import { Theme, Flex, NavLink, Container, useThemeUI } from "theme-ui";
import Fonts from "./fonts";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const navStyles = {};

export default function Layout({ children }: Props): React.ReactElement {
  const theme = useThemeUI();
  return (
    <>
      <Container style={navStyles} bg="muted">
        <Flex as="nav">
          <NavLink href="/" p={2}>
            Home
          </NavLink>
          <NavLink href="/about" p={2}>
            About
          </NavLink>
          <NavLink href="/projects" p={2}>
            Projects
          </NavLink>
        </Flex>
      </Container>
      {children}
    </>
  );
}

export const Heading: HeadFC = () => <Fonts />;
