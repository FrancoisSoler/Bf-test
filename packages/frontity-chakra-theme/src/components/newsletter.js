import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import tile from "../assets/pattern-tile-green.svg";

export const PatternBox = ({ showPattern = true, ...props }) => (
  <Box
    as="section"
    bg="primary.700"
    borderTop="10px solid"
    borderColor="accent.400"
    {...(showPattern && {
      bgImage: `url(${tile})`,
      bgSize: "1018px",
      bgPos: "top center"
    })}
    {...props}
  />
);

export const PatternBoxInner = props => (
  <Box
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    maxW="640px"
    mx="auto"
    px={6}
    {...props}
  />
);

// TODO: Add the logic to show this component based on if newsletter package exists
export const Newsletter = props => (
  <PatternBox {...props}>
    <Box
      py="80px"
      position="relative"
      zIndex="1"
      overflow="hidden"
      textAlign="center"
      maxW="640px"
      mx="auto"
      px={6}
    >
      <Heading color="white" textTransform="uppercase">
        Never miss an update!
      </Heading>
      <Text mt={4} fontSize="xl" color="accent.400">
        Receive the latest framework releases, new features, blog posts and
        tutorials.
      </Text>
      <SubscribeForm />
    </Box>
  </PatternBox>
);

const SubscribeInput = props => (
  <Box
    as="input"
    width="100%"
    display="block"
    bg="white"
    height="30px"
    border="none"
    px="15px"
    fontSize="10px"
    borderBlock="1px orange"
    placeholder="Email"
    _placeholder={{ color: "gray.500" }}
    {...props}
  />
);




export const SubscribeForm = props => (
  <Flex as="form"  {...props}>
    <SubscribeInput />
  </Flex>
);
