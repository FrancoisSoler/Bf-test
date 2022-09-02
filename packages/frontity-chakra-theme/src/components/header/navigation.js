import { Box, Stack } from "@chakra-ui/react";
import { styled } from "frontity";
import React from "react";
import FrontityLink from "../link";

const Link = styled(FrontityLink)`
  position: relative;
  color: #33344e;
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: transparent;
  }

  &:hover {
    color: #fbae66;
  }
`;

export const SiteMenu = (props) => (
  <Stack
    ml="50px"
    spacing="30px"
    as="ul"
    listStyleType="none"
    align="center"
    justifyContent="flex-end"
    direction="row"
    color="white"
    {...props}
  />
);

const SiteMenuItem = ({ link, ...props }) => (
  <Box
    as="li"
    color="primary.700"
    fontSize={{ base: "sm", lg: "md" }}
    fontWeight="medium"
    fontFamily="heading"
    textTransform="uppercase"
    position="relative"
    cursor="pointer"
    {...props}
  >
    <Link link={link}>{props.children}</Link>
  </Box>
);

const Navigation = ({ menu, ...props }) => (
  <Box
    as="nav"
    display={{ base: "none", md: "inline-block" }}
    {...props}
  >
    <SiteMenu>
      {menu.map(([name, link]) => (
        <SiteMenuItem key={name} link={link}>
          {name}
        </SiteMenuItem>
      ))}
    </SiteMenu>
  </Box>
);

export default Navigation;
