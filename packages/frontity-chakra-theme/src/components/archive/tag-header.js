import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const TagHeader = ({
  postData,
  state,
  taxonomy,
  title,
  isPageCat,
  ...props
}) => {
  const dataLink = state.source.get(state.router.link);

  const [textTag, setTags] = useState();
  const dataPrev = dataLink.previous;
  useEffect(() => {
    const textTag = JSON.parse(localStorage.getItem("textTag"));
    if (textTag) {
      setTags(textTag);
    }
  }, []);
  return (
    <Box>
      {dataPrev == undefined && (
        <Box bg="#faefe7" height="100%">
          <Box width="100%" height="4em">
            <Text
              bg="#f5ddcc"
              padding="1em"
              borderRadius="10px"
              display="inline-block"
              fontFamily="OpenSans"
              fontWeight="600"
              color="#33344E"
              fontSize="xs"
              ml="50%"
              transform="translateX(-50%) "
            >
              {" "}
              {textTag}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TagHeader;
