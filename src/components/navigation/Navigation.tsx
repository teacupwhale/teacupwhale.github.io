import React, { useState } from "react";
import {
  Flex,
  NavLink,
  Container,
  useThemeUI,
  MenuButton,
  Heading,
} from "theme-ui";

const navStyles = {
  top: 0,
};

export default function Navigation(): React.ReactElement {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <Container
      style={navStyles}
      color="primary"
      bg="background"
      variant="container.sticky"
    >
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Heading
          sx={{
            flex: "1 0 auto",
          }}
        >
          moonless studio
        </Heading>
        <Container
          sx={{
            flex: "0 1 auto",
            width: "auto",
          }}
        >
          <Flex as="nav">
            <div
              style={{
                visibility: isNavVisible ? undefined : "hidden",
              }}
            >
              <NavLink href="/" p={2}>
                Home
              </NavLink>
              <NavLink href="/about" p={2}>
                About
              </NavLink>
              <NavLink href="/projects" p={2}>
                Projects
              </NavLink>
            </div>

            <MenuButton
              onClick={() => {
                setIsNavVisible(!isNavVisible);
              }}
              sx={{
                cursor: "pointer",
              }}
            />
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
}
