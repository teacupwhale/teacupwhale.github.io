import React from "react";
import { Box, Container, Flex, Link } from "theme-ui";

export default function Footer(): React.ReactElement {
  return (
    <Container>
      {" "}
      <Box variant="box.footer">
        <Flex variant="flex.footer">
          <div>
            questions? contact us at{" "}
            <Link variant="link.footer" href="mailto:hello@teacupwhale.com">
              hello@teacupwhale.com
            </Link>
          </div>
          <div>&copy; teacup whale, llc 2024</div>
        </Flex>
      </Box>
    </Container>
  );
}
