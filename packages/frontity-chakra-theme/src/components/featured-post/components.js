import { Box, Heading, Flex } from "@chakra-ui/react";
import { styled, css } from "frontity";
import React from "react";
import Link from "../link";
import Image from "@frontity/components/image";

export const PostLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  textAlign="left"
`;

export const PostContent = (props) => (
  <Box
    p="40px"
    width="100%"
    display="flex"
    flexDirection="column"
    textTransform="uppercase"
    mt="auto"
    textAlign="left"
    color="white"
    zIndex="2"
    {...props}
  />
);
export const PostImageHomeContainer = ({ src, alt, srcSet, ...props }) => (
  <Box
    role="group"
    cursor="pointer"
    //margin={{ base: "8px 15px 8px 0", sm: "10px 20px 10px 0", md: "12px" }}
    maxW="95%"
    maxH="95%"
    w={{ base: "30%", sm: "30%" }}
    position="relative"
    padding={{ base: "8px 8px 8px 0", sm: "8px 8px 8px 0" }}
     css={css`
     flex-shrink: 0;

/*       @media (max-width: 300px) {
        max-height: 90%;
      } */
    `}  
    {...props}
  >
    <PostImageHome src={src} alt={alt} srcSet={srcSet} />
  </Box>
);
export const PostImageHome = (props) => (
  <Box
    as={Image}
    //boxSize="100%"
    //margin="0 0 0 auto"
    borderRadius="10px"
    
    css={css`
    width: 100%;
    height: auto;
      object-fit: cover;
      aspect-ratio: 1/1;
    `}
    {...props}
  />
);

export const PostTitle = (props) => (
  <Heading
    as="h1"
    size="2xl"
    pointerEvents="none"
    position="relative"
    {...props}
  />
);

export const PostOverlay = (props) => (
  <Box
    pointerEvents="none"
    zIndex={1}
    boxSize="100%"
    position="absolute"
    top="0"
    left="0"
    background="rgba(0,0,0,0.4)"
    transition="background-color ease 0.25s"
    _groupHover={{
      background: "rgba(0,0,0,0.6)",
    }}
    {...props}
  />
);

export const PostImageWithOverlay = ({ src, alt, srcSet, ...props }) => (
  <Box
    role="group"
    cursor="pointer"
    height="260px"
    width="100%"
    pos="relative"
    {...props}
  >
    <PostOverlay />
    <PostImage src={src} alt={alt} srcSet={srcSet} />
  </Box>
);

export const PrimaryPostArticle = (props) => (
  <Box
    as="article"
    position="relative"
    display="flex"
    direction="column"
    alignItems="flex-end"
    minHeight={{ base: "unset", md: "400px" }}
    height={{ base: "auto", md: "100%" }}
    paddingTop={{ base: "80px", md: "0" }}
    cursor="pointer"
    {...props}
  />
);

export const SecondaryPostArticle = (props) => (
  <Box
    as="article"
    position="relative"
    display="flex"
    direction="column"
    flexGrow="1"
    cursor="pointer"
    height="100%"
    minHeight={{ base: "unset", lg: "240px" }}
    {...props}
  />
);

export const PostImage = (props) => (
  <Box
    as={Image}
    width="900"
    height="550"
    position="absolute"
    boxSize="100%"
    objectFit="cover"
    top="0"
    left="0"
    maxWidth="100%"
    {...props}
  />
);
