import React from "react";
import { Flex } from "theme-ui";
import { PassThroughChildren } from "../logo/Layout";
export default function Section({
  children,
  variant,
  sx,
}: PassThroughChildren & {
  variant?: string;
  sx?: Record<string, string>;
}): React.ReactElement {
  return (
    <Flex as="section" sx={sx} variant={variant || "flex.section"}>
      {children}
    </Flex>
  );
}
