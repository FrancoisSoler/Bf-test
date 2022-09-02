import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import {  Flex } from "@chakra-ui/react";
import Link from "../../link";

const PostViewCountCross = ({ bgColor, colorArticleSecondary }) => {
  return (
    <Flex
      bg={bgColor}
      width="36px"
      height="36px"
      borderRadius="5px"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        link="/"
        bg={colorArticleSecondary}
        padding=".6em"
        //margin="0 2em 0 0"
        borderRadius="5px"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VscChromeClose size="18px" />
      </Link>
    </Flex>
  );
};

export default PostViewCountCross;
