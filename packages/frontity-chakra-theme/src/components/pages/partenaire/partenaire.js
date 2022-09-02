import React from "react";
import { styled, connect, css } from "frontity";
import { Box, Heading, Image, Text, Flex, Link } from "@chakra-ui/react";
import { fadeInLong, fadinInRight } from "../../styles/keyframes";
import { images } from "../../constants";
import PartenaireModal from "./partenaire-modal";
import PartenaireForm from "./partenaire-form";
import PartenaireButton from "./partenaire-button";

const Partenaire = ({ state, actions }) => (
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
      height = {{base: "100%", md: "31em"}}
      pt={{base:'160px',md:'0'}}
  
      p={{ base: "0", md: "80px" }}
      display={{ base: "block", md: "flex" }}
      justifyContent="center"
      alignItems="center"
    >
      <Box width={{ base: "100%", md: "40%" }}>
        <Image
          margin="0 auto"
          width={{ base: "67%", md: "95%" }}
          src={images.marginaliaIa}
        />
      </Box>
      <Flex
        flexDir="column"
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: "50%" }}
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
          Partagez votre story
        </Text>
        <Heading
          color="#33344E"
          mt="0.5em"
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
          margin={{base:"0 auto", md:"30px 0 40px 0"}}
          w={{ base: "90%", md: "100%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Notre offre est en cours de création, mais vous pouvez nous partager
          votre story
        </Text>

        <Box display={{ base: "block", md: "none" }}>
          <Image src={images.smiley} maxW="5%" margin=".5em auto" />
          <Text my="1em">en remplissant le formulaire ci-dessous </Text>
          <Image mb="2em" maxW="5%" margin=".8em auto" src={images.handdown} />
        </Box>

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
    <Box w="100%" height={["20em","20em","0","0"]} bg="#faefe7" />
    </Box>
  </Box>
);

export default connect(Partenaire);
