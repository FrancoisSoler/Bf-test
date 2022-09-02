import React from "react";
import { Box } from "@chakra-ui/react";

const PostViewCountCounter = ({ finalPc }) => {
  return (
    <Box display="inline" whiteSpace="pre-line" fontSize="xs">
      {finalPc} vues
    </Box>
  );
};

export default PostViewCountCounter;
