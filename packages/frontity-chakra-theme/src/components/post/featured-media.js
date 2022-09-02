import { Box } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";
import { getMediaAttributes } from "../helpers";
import { BsPlayCircle } from "react-icons/bs";

// eslint-disable-next-line
const FeaturedMedia = ({
  videoArticle,
  videocarre,
  state,
  actions,
  libraries,
  id,
  ...props
}) => {
  const imgProps = getMediaAttributes(state, id);
  const data = state.source.get(state.router.link);
  // is empty if the id doesn't exist in state.source anymore
  const noImgProps = Object.keys(imgProps).length === 0;

  if (noImgProps) return null;

  return (
    <Box as="figure" mt={4} height="200px" {...props}>
      <Box
        as={Image}
        boxSize="100%"
        borderRadius="10px 10px 0 0"
        objectFit="cover"
        {...imgProps}
      />
      {(videoArticle || videocarre)   && (
          <Box
            position="absolute"
            zIndex="99"
            left="50%"
            top="40%"
            color="#fff"
            transform="translate(-50%, 0) "
            fontSize="60px"
          >
            <BsPlayCircle />
          </Box>
        )}
    </Box>
  );
};

export default connect(FeaturedMedia);
