import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { images } from "../constants";
import { themeData } from "../themesdata";
import { slideDown, slideUp } from "../styles/keyframes";

const CatDesktop = ({ couleur_tag }) => {
  // Get the data of the current list.

  return (
    <Flex
      height="50em"
      bg={couleur_tag}
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        bg={couleur_tag}
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
      <Flex bg={couleur_tag} height="23em" justifyContent="center">
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          justifyItems="center"
          spacing={{ md: "15px", lg: "25px" }}
          bg={couleur_tag}
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
              transition="all 5s"
              // transform={themeData.transformCat}
              css={css`
              animation: ${slideUp} 1s;
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              animation-fill-mode: forwards;

              &:nth-of-type(2), &:nth-of-type(4)  {   
                    animation: ${slideDown} 1s;
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                  animation-fill-mode: forwards;
                }

              `}
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
    </Flex>
  );
};

export default CatDesktop;
