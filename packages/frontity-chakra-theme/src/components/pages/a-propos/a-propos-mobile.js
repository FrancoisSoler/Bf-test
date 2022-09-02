import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import { connect, css } from "frontity";
import React from "react";
import { images } from "../../constants";
import { themeData } from "../../data-object/themesdata";
import { fadinInLeft, scaleDownCenter, rotate20 } from "../../styles/keyframes";
 const MentionsLink = () => {
  return (
    <Link link="/mentions-legales/"  fontSize="14px">
      Mentions Légales
    </Link>
  );
};
const PolitiqueLink = () => {
  return (
    <Link link="/politique-confidentialite/" textdecoration="underline" fontSize="14px">
      Politique de confidentialité
    </Link>
  );
};

const AProposMobile = () => {
  return (
    <Box
      fontSize={["sm", "md", "lg", "xl"]}
      bg={"briefstory.bg"}
      pt="30px"
      pb="20px"
      color="gray"
      fontFamily="OpenSans"
    >
      <Box
        css={css`
          width: 100%;
          height: 100%;
          opacity: 0;
          animation: ${fadinInLeft} 1.1s ease 0.3s 1 normal forwards;
        `}
      >
        <Image
          src={images.propos}
          textAlign="center"
          margin={"0 auto"}
          marginTop={"80px"}
          maxW="95%"
        />
      </Box>

      <Box maxWidth={"1140px"} margin="0 auto" textAlign={"center"}>
        <Heading
          fontFamily="CatamaranBold"
          fontSize={{ base: "18px", md: "40px", lg: "56px" }}
          color={"#33344E"}
          marginTop={"30px"}
          padding="40px 40px 40px"
        >
          Un média d’histoires courtes et inspirantes
        </Heading>
        <Box fontSize={"sm"} width={{ base: "90%", md: "95%" }} margin="0 auto" pt="10px">
          <Text color="#33344E9E">
            Chaque jour, briefstory sélectionne des « stories » à découvrir
            uniquement sur votre mobile.
          </Text>
          <Text
            padding="25px 15px"
            fontFamily="OpenSansBolditalic"
            color="#FBAC62"
          >
            Le temps est précieux, ne le gaspillons pas
          </Text>
          <Text color="#33344E9E">
            Des histoires courtes sont savamment choisies et éditées par notre
            équipe. Elles vous permettent, en quelques minutes, de balayer
            l’actualité des initiatives positives et inspirantes. Numérique,
            innovation, nouveautés, divertissement, transport, énergie, santé,
            alimentation… briefstory éclaire notre quotidien et nous prépare à
            demain.
          </Text>

          <Text
            padding="25px 15px"
            color="#FBAC62"
            fontFamily="OpenSansBoldItalic"
          >
            briefstory, inspiré par l’usage
          </Text>
          <Text color="#33344E9E">
            Sur briefstory, pas de bannière publicitaire, de pop-up intrusive,
            ni d’abonnement, seulement des partenariats. briefstory, c’est le
            média qui réconcilie les lecteurs et les annonceurs grâce a une une
            offre de contenus originale et une expérience de lecture fluide.
            Nous proposons ainsi aux organisations, associations et entreprises
            de s’associer à certains contenus en les parrainant.
          </Text>

          <Text
            padding="25px 15px"
            color="#FBAC62"
            fontFamily="OpenSansBoldItalic"
          >
            briefstory, un média positif et utile
          </Text>
          <Text pb="5px" color="#33344E9E">
            briefstory s’adresse à tous les curieux d’innovation. Créatifs,
            professionnels du numérique, entrepreneurs, briefstory est pensé
            pour vous.
          </Text>
          <Text pt="5px" color="#33344E9E">
            Ainsi, tous vos retours sont les bienvenus pour co-construire
            ensemble un espace médiatique utile et positif :
            contact@briefstory.io
          </Text>
        </Box>
        <Box>
          <Flex flexDirection="column" mb="3em">
            <Flex
              bg="#faefe7"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mt="60px"
            >
              <Heading fontFamily="Catamaran" fontSize="16px" color="#83868A9E">
                Nos thématiques
              </Heading>
            </Flex>
            <Flex bg="#faefe7" height="auto" justifyContent="center">
              <Box
                columns={{ base: 1, md: 4 }}
                spacing={{ md: "15px", lg: "25px" }}
                justifyItems="center"
              >
                {Object.values(themeData).map((themeData) => (
                  <Flex
                    key={themeData}
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    transition="background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;"
                    padding="30px 15px 25px 15px"
                    margin="60px 30px 30px 30px"
                    bg="#fff"
                    borderRadius="2em"
                    boxSizing="border-box"
                    maxH="320px"
                    boxShadow="0px 7px 40px 2px rgba(18, 21, 154, 0.1)"
                    _hover={{
                      boxShadow: "0px 10px 25px 13px rgba(226,216,223,1);",
                    }}
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      bg={themeData.bg}
                      borderRadius="25px"
                      width="110px"
                      height="110px"
                      p={"20px"}
                      css={css`
                        transition: all 0.3s ease;
                        &:hover {
                          transform: rotate(10deg);

                          background-color: ${themeData.hoverBtn};
                        }
                      `}
                    >
                      <Image src={themeData.img} width="90px" />
                    </Flex>
                    <Heading
                      textAlign="center"
                      py=".5em"
                      fontSize="21px"
                      width="100%"
                      fontWeight="700"
                      color="#404757"
                    >
                      {themeData.title}
                    </Heading>
                    <Text
                      fontFamily="Muli"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="28px"
                      color="#858A96"
                      textAlign="center"
                      paddingBottom="5px"
                    >
                      {themeData.text}
                    </Text>
                    <Box
                      borderRadius="10px"
                      fontFamily="OpenSansBold"
                      fontSize="14px"
                      bg={themeData.bg}
                      p="10px 20px"
                      alignContent="center"
                      minWidth="110px"
                      minHeight="40px"
                      shadow="0px 1px 1px 0px"
                      scale="1"
                      fontWeight="900"
                      color="#33344E"
                      css={css`
                        transition: all 0.3s ease-in-out;
                        &:hover {
                          transform: scale(0.9);

                          background-color: ${themeData.hoverBtn};
                        }
                      `}
                    >
                      <Link
                        link={themeData.url}
                      >
                        {themeData.value}
                      </Link>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </Flex>
           <Box>
            <MentionsLink />
            
          </Box>
          <Box>
          <PolitiqueLink/>
          </Box> 
        </Box>
      </Box>
    </Box>
  );
};

export default connect(AProposMobile);
