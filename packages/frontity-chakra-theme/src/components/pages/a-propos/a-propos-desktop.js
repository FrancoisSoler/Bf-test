import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { images } from "../../constants";
import Link from "../../link";
import { fadinInLeft } from "../../styles/keyframes";

const MentionsLink = (props) => {
  return (
    <Link link="/mentions-legales/" textdecoration="underline" fontSize="12px" pb="10px">
      Mentions Légales
    </Link>
  );
};

const PolitiqueLink = ( ) => {
  return (
    <Link link="/politique-confidentialite/" fontSize="12px" pt="10px">
      Politique de confidentialité
    </Link>
  );
};

const AProposDesktop = ({ state }) => {
  const url = state.frontity.url + "a-propos/";

  return (
    <Box as="section">
      <Flex
        pt="80px"
        bg={{ base: "#f5ddcc7a", md: "#fff" }}
        justifyContent="center"
        alignItems="center"
        flexDirection={{ sm: "column", lg: "row" }}
        width="100%"
        height="100%"
        fontSize={["sm", "md", "lg", "xl"]}
        color="gray"
        fontFamily="OpenSans"
        margin="0 auto"
        textAlign={"center"}
        pb="100px"
      >
        <Flex
          borderRadius="20px"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          bg="#faefe7"
          width={{ sm: "43em", md: "90%", lg: "1060px" }}
          height={{ md: "1578px", lg: "1400px" }}
          padding={{ sm: ".5em 2em", lg: "80px" }}
          flexWrap="wrap"
          boxShadow="0px 0px 16px -1px rgba(131, 134, 138, 0.42)"
          css={css`
            opacity: 0;
            animation: ${fadinInLeft} 1.3s ease 0.3s 1 normal forwards;
          `}
        >
          <Flex
            flexDirection="column"
            width="90%"
            justifyContent="center"
            bg="#faefe7"
            height="80%"
            //pt="40px"
          >
            <Box
              color="#f0f"
              css={css`
                opacity: 0;
                animation: ${fadinInLeft} 1.4s ease 0.6s 1 normal forwards;
              `}
            >
              <Image
                maxW="50%"
                src={images.propos}
                textAlign="center"
                margin={"0 auto"}
              />
            </Box>

            <Box pb="80px">
              <Heading
                fontFamily="CatamaranBold"
                fontSize={{ base: "18px", md: "40px" }}
                color={"#33344E"}
                marginTop={"40px"}
                padding="30px 30px 30px"
                
              >
                Un média d’histoires courtes et inspirantes
              </Heading>
              <Box fontSize={"16px"} p="10px 10px 10px">
                <Text>
                  Chaque jour, briefstory sélectionne des « stories » à
                  découvrir uniquement sur votre mobile.
                </Text>
                <Text
                  padding="20px 20px 20px"
                  fontWeight="bold"
                  color="#FBAC62"
                  fontStyle="italic"
                >
                  Le temps est précieux, ne le gaspillons pas
                </Text>
                <Text>
                  Des histoires courtes sont savamment choisies et éditées par
                  notre équipe. Elles vous permettent, en quelques minutes, de
                  balayer l’actualité des initiatives positives et inspirantes.
                  Numérique, innovation, nouveautés, divertissement, transport,
                  énergie, santé, alimentation… briefstory éclaire notre
                  quotidien et nous prépare à demain.
                </Text>

                <Text
                  padding="20px 20px 20px"
                  fontWeight="bold"
                  color="#FBAC62"
                  fontStyle="italic"
                >
                  briefstory, inspiré par l’usage
                </Text>
                <Text>
                  Sur briefstory, pas de bannière publicitaire, de pop-up
                  intrusive, ni d’abonnement, seulement des partenariats.
                  briefstory, c’est le média qui réconcilie les lecteurs et les
                  annonceurs grâce a une une offre de contenus originale et une
                  expérience de lecture fluide. Nous proposons ainsi aux
                  organisations, associations et entreprises de s’associer à
                  certains contenus en les parrainant.
                </Text>

                <Text
                  padding="20px 20px 20px"
                  fontWeight="bold"
                  color="#FBAC62"
                  fontStyle="italic"
                >
                  briefstory, un média positif et utile
                </Text>
                <Text>
                  briefstory s’adresse à tous les curieux d’innovation.
                  Créatifs, professionnels du numérique, entrepreneurs,
                  briefstory est pensé pour vous.
                </Text>
                <Text>
                  Ainsi, tous vos retours sont les bienvenus pour co-construire
                  ensemble un espace médiatique utile et positif :
                  contact@briefstory.io
                </Text>
              </Box>
            </Box>
            <MentionsLink />
            <PolitiqueLink  textdecoration="underline"/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default connect(AProposDesktop);
