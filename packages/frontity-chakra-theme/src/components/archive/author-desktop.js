import React, { useEffect, useState, useRef } from "react";
import { styled, connect, css } from "frontity";
import { Box, Heading, Image, Text, Flex, Link } from "@chakra-ui/react";
import { fadeInLong, fadinInRight } from "../styles/keyframes";
import PartenaireModal from "../pages/partenaire/partenaire-modal";
import PartenaireForm from "../pages/partenaire/partenaire-form";
import PartenaireButton from "../pages/partenaire/partenaire-button";

const AuthorDesktop = ({ state, actions,authorInfo, }) => {


  /*   const [disabled, setDisabled] = useState(false);
  const [reset, setReset] = useState(true); */

return(
  <Box     
    width='100%'
    textAlign={"center"} 
    padding={{base:"80px 0 0 0", md:"130px"}}
    backgroundColor='#fff'
  >
    <Box
      bg="#faefe7"
      boxShadow="0px 0px 16px -1px rgba(131, 134, 138, 0.42)"
      borderRadius="20px"
      as="section"
      margin={{ base: "unset", md: "0 auto 0 auto" }}
      maxW={{ base: "100%", md: "1060px" }}
      height = {{base: "100%", md: "40em"}}
      pt={{base:'160px',md:'0'}}
  
      p={{ base: "0", md: "80px" }}
      display={{ base: "block", md: "flex" }}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: "100%" }}
      >
        <Text
          color="rgba(131, 134, 138, 0.42)"
          fontFamily="CatamaranBold"
          textTransform="uppercase"
          fontSize="16px"
          fontWeight="400"
          lineHeight={"34px"}
          letterSpacing="0.5px"
          transform={{ base: "translateY(-1em)", md: "none" }}
        >
          Comme
        </Text>
        <Box display="flex" flexDirection="row" textAlign={"left"} alignItems="center">
              <Image
                maxW="8em"
                border="2px solid #fff"
                src={authorInfo.avatar_urls[24]}
                borderRadius=".8em"
              />
              <Box ml={"20px"}>
              <Text
              fontFamily="Catamaran"
              fontWeight={"bold"}
              color="#54595F"
              fontSize="17px"
              mb="5px"
            >
              {authorInfo.name}
            </Text>
              <Text
              fontFamily="OpenSans"
              color="#7A7A7A"
              fontSize="17px"
            >
              {authorInfo.description}
            </Text>
            </Box>
        </Box>
        <Text
        mt="80px"
          color="rgba(131, 134, 138, 0.42)"
          fontFamily="CatamaranBold"
          textTransform="uppercase"
          fontSize="16px"
          fontWeight="400"
          lineHeight={"34px"}
          letterSpacing="0.5px"
          transform={{ base: "translateY(-1em)", md: "none" }}
        >
          Partagez votre story
        </Text>
        <Heading
          color="#33344E"
          fontSize={{ base: "lg", md: "40px" }}
          lineHeight="60px"
          fontWeight="600"
          fontFamily="CatamaranBold"
        >
          Devenez partenaire d'un média innovant
        </Heading>
        <Text
          css={css`
          color: rgba(51, 52, 78, 0.62);
          opacity: 0;
          font-family: "OpenSans";
          font-size: 18px;
          font-weight: 400;
          line-height: 34px;
          flex-wrap: wrap;
          animation: ${fadeInLong} 1.2s ease 0.5s 1 normal forwards;
        `}
          margin={{base:"0 auto", md:"10px 0 40px 0"}}
          w={{ base: "90%", md: "100%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Notre offre est en cours de création, mais vous pouvez nous partager
          votre story
        </Text>

        <Box
          width="60%"
          margin={{ base: "0 auto", md: "unset" }}
          transform={{ base: "none", md: "translateY(-2em)" }}
        >
          <PartenaireButton
            width="13em"
            height="3em"
            as="button"
            onClick={actions.theme.openPartenaireModal}
          />
          <PartenaireModal
            isOpen={state.theme.isPartenaireModalOpen}
            onClose={actions.theme.closePartenaireModal}
          >
            <PartenaireForm />
          </PartenaireModal>
        </Box>
      </Flex>
    </Box>
    <Box>
    </Box>
  </Box>
);
};

export default connect(AuthorDesktop);