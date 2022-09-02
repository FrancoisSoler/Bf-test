import React from "react";
import Link from "@frontity/components/link";
import { images } from "../../constants";
import { Box, Image } from "@chakra-ui/react";

const PostViewCountImg = () => {
  return (
    <Box
      display="inline-flex"
      pos="absolute"
      top="69%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Link display="inline" link="/">
        <Image
          as="img"
          width={{ base: "138px", lg: "100%" }}
          height="40px"
          display="flex"
          flexGrow="1"
          src={images.BfLogo}
        />
      </Link>
    </Box>
  );
};

export default PostViewCountImg;
