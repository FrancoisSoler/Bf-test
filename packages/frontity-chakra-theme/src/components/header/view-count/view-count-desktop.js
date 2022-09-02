import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { images } from "../../constants";
import Link from "../../link";

const PostViewCountDesktop = ({ bgColorArticle }) => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      width="100%"
      height="100%"
      pt="1.2em"
      bg={bgColorArticle}
    >
      <Flex
        width="92%"
        maxW="1060px"
        height="100%"
        bg={bgColorArticle}
        justifyContent="space-between"
        alignItems="center"
        margin="0 auto"
      >
        <Flex justifyContent="flex-start">
          <Link link="/" >
            <Image maxW="20%" objectFit="contain" src={images.BfLogo} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostViewCountDesktop;
