import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "../link";

const MenuItem = ({ index, children, mb, link, ...rest }) => (
  <Box as="li" listStyleType="none" mb={mb} {...rest}>
    <Link
      display="flex"
      justifyContent="flex-start"
      role="group"
      pos="relative"
      minH="25px"

      _hover={{
        //bg: "rgba(236, 164, 25, 0.14)",
        borderColor: "briefstory.blueIcon",
        color: "briefstory.yellow",
      }}
      _focus={{
        //bg: "rgba(236, 164, 25, 0.14)",
        borderColor: "briefstory.blueIcon",
        color: "briefstory.yellow",
      }}
      transition="all 0.3s"
      //padding="12px"
      link={link}
    >
      <Box
        letterSpacing="-0.004em"
        lineHeight="1.39"
        cursor="pointer"
        fontFamily="Lato"
        fontWeight="700 !important"
        textTransform="uppercase"
        fontSize="14px"
        color="briefstory.iconBlue"

      >
        {children}
      </Box>
    </Link>
  </Box>
);

export default MenuItem;
