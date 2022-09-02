import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import { images } from "../../constants";
const FourthBlock = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Flex
      width="100%"
      height="28em"
      mb="8em"
      justifyContent="center"
      alignItems="flex-start"
      mt="3em"
    >
      <Flex
        mr="-4em"
        justifyContent="flex-end"
        alignItems="center"
        width={{ md: "100%", lg: "1120px" }}
        height="100%"
        transform="  translateY(-1em) translateX(-1.2em) }"
      >
        <Box width="350px" mr="9em"         transform="  translateY(1em)}"
>
          <Image width="350px" src={images.mediaBg} />
        </Box>
        <Flex
          flexWrap="wrap"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="flex-start"
          //ml={{ sm: "5em" }}
          width={{ md: "40%", lg: "45%" }}
          //height={{ md: "45%", lg: "100%" }}
        >
          <Heading
            color="#33344E"
            fontFamily="CatamaranBold"
            fontWeight="500"
            fontSize="35px"
            lineHeight="1.5em"
            mb=".3em"
            width={{ sm: "100%", md: "100%" }}
          >
            Pour les curieux de l'innovation et de la culture numérique
          </Heading>
          <Text
            fontSize="18px"
            lineHeight="34px"
            color="rgba(51, 52, 78, 0.62)"
            fontWeight="400"
            fontFamily="OpenSans"
            maxW="96%"
          >
            briefstory met l’accent sur la culture numérique au sens large et
            son impact dans la société. Notre média s'intéresse aux projets, aux
            entreprises dans lesquelles l’innovation tient une place importante
            🤖
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default connect(FourthBlock);
