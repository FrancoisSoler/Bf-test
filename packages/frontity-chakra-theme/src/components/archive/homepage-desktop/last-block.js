import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { images } from "../../constants";

const LastBlock = () => {
  return (
    <Box width="100%"  height="25em" position="relative">
      
      <Box
        position="absolute"
        overflow="hidden"
        left="0"
        bottom="0"
        height="90%"
        bgImage={images.bgLast}
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100%"
        transform=" rotate(180deg) "
        zIndex="0"
      />

      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        width="50%"
        position="relative"
        zIndex="1"
        height="100%"
      >
        <Heading
          color="#FBAC62"
          fontFamily="Poppins"
          fontSize="16px"
          textTransform="uppercase"
          letterSpacing="0.5px"
          fontWeight="900"
        >
          Pour explorer nos stories
        </Heading>
        <Text
          fontSize="35px"
          py=".6em"
          fontWeight="600"
          color="#404757"
          fontFamily="Catamaran"
        >
          Flashez ici
        </Text>
        <Box>
          {/* need to be fixed */}
          <Image
            margin="0 auto"
            width="60%"
            src="https://briefstory.staging.tempurl.host/wp-content/uploads/2020/04/QR-code-BS.png"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default connect(LastBlock);
