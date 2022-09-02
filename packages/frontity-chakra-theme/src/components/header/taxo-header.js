import React from "react";
import { styled } from "frontity";
import { VscChromeClose } from "react-icons/vsc";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import { images } from "../constants";
const TaxoHead = () => (
  <TaxonomyHeader>
    <Box width="100%" bg="#faefe7" height="80px">
      <Flex
        width="94%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        margin="0 auto"
      >
        <Flex
          width="36px"
          height="36px"
          padding=".5em"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          bg="#f5ddcc"
        >
          <Link
            link="/"
            padding=".5em"
            margin="0 2em 0 0"
          >
            <VscChromeClose size="18px" />
          </Link>
        </Flex>
        <Box
          margin="0 auto "
          transform="translateX(-1.3em) "
          display="inline-flex"
        >
          <Link link="/">
            <Image maxW="138px" src={images.BfLogo} />
          </Link>
        </Box>
      </Flex>
    </Box>
  </TaxonomyHeader>
);

export default TaxoHead;

const TaxonomyHeader = styled.div`
  width: 100%;
  height: 80px;
  font-size: 0.8em;
`;
