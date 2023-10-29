import React from "react";
import { Flex } from "theme-ui";
import { PassThroughChildren } from "../layout/Layout";
export default function Section({
  children,
  variant,
}: PassThroughChildren & { variant?: string }): React.ReactElement {
  return (
    <Flex as="section" variant={variant || "flex.section"}>
      {children}
    </Flex>
  );
}
