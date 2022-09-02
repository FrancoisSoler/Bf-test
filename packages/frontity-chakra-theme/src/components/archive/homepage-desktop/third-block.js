import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { images } from "../../constants";
import { themeData } from "../../data-object/themesdata";


const ThirdBlock = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  
  return (
    <Flex  flexDirection="column">
      <Box
        width="100%"
        height="100%"
      >
        <Image src={images.waveBgRotate} height="200px" />
      </Box>
      <Flex
        bg="#faefe7"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading padding=".5em 0">Nos thématiques</Heading>
        <Text
          maxWidth="590px"
          textAlign="center"
          color="#b3b2b6"
          fontWeight="400"
          fontFamily="OpenSans"
          fontSize="18px"
          lineHeight="28px"
          mb="2em"
        >
          A travers les histoires courtes nous nous intéressons à tous les
          sujets inspirants dans les thèmes suivants
        </Text>
      </Flex>
      <Flex bg="#faefe7" height="23em" justifyContent="center">
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          justifyItems="center"
          spacing={{ md: "15px", lg: "25px" }}
          bg="#faefe7"
          maxW="95%"
        >
          {Object.values(themeData).map((themeData) => (
            <Flex
              key={themeData.id}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              //padding=".5em"
              bg="#fff"
              borderRadius="1em"
              maxW="265px"
              maxH="270px"
              transform={themeData.transform}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                bg={themeData.bg}
                borderRadius="25px"
                width="110px"
                height="110px"
              >
                <Image src={themeData.img} width="80px" />
              </Flex>
              <Heading
                textAlign="center"
                py=".5em"
                fontSize="xl"
                width="100%"
                fontWeight="700"
                color="#404757"
              >
                {themeData.title}
              </Heading>
              <Text
                fontFamily="Muli"
                fontWeight="400"
                fontSize=".7em"
                lineHeight="28px"
                color="#858A96"
                textAlign="center"
                width="95%"
              >
                {themeData.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
      <Box height="110px">
        <Image src={images.waveBg} />
      </Box>
    </Flex>
  );
};

export default connect(ThirdBlock);
