import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import MobileMenu from "../menu";
import { isUrl, omitConnectProps } from "../helpers";
import { connect } from "frontity";
import { images } from "../constants";
const SiteHeader = (props) => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    height={{ base: "80px", lg: "75px" }}
    pos={{ base: "fixed", lg: "relative" }}
    top="0"
    left="0"
    bg={{ base: "briefstory.menu", md: "#fff" }}
    zIndex="90"
    {...props}
  />
);

const SiteHeaderInner = (props) => (
  <Flex
    as="SiteHeaderInner"
    align="center"
    width={{ base: "93%", lg: "100%" }}
    mx="auto"
    justifyContent={{ base: "space-between" }}
    pt={{ base: "20px", md: "5px" }}
    height={{ base: "55px", lg: "100%" }}
    maxW="1072px"
    {...props}
  />
);

const Logo = ({ isImage = true, src }) => (
  <Box
    as="img"
    src={src}
    width={{ base: "138px", lg: "194.6px" }}
    height="40px"
    display="flex"
    flexGrow="1"
    margin="0 auto"
  />
);
const SiteLogo = connect(({ state, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  const isImage = isUrl(state.theme.logo);
  return (
    <Box display="flex" {...omitConnectProps(props)}>
      <Link link="/" justifyContent="center">
        <Logo isImage={isImage} src={images.BfLogo} />
      </Link>
    </Box>
  );
});

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <MobileMenu />
      <SiteLogo />
      {children}
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
