import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { connect, css } from "frontity";
import { useWindowSize } from "../hooks/UseViewPort";
import CatDesktop from "./cat-desktop";
import { fadeInLong } from "../styles/keyframes";
const CatCallToAction = ({showCat, isPageCat, state, taxonomy, title, ...props }) => {
  const data = state.source.get(state.router.link);
  const size = useWindowSize();

  const catDataAcf = state.source.category[data.id].acf;
  const catData = state.source.category[data.id];
  const couleur_tag = catDataAcf.couleur_tag_cta;
  const couleur_tag_hover = catDataAcf.couleur_tag_cta_hover;

  //console.log("pagecayt", isPageCat);
  return (
    <Box>
      {isPageCat && size.width > 768 ? (
        <CatDesktop couleur_tag={couleur_tag} />
      ) : (
        <Box
          display={isPageCat ? "block" : "none"}
          height={{ base: "17em", sm: "18em" }}
          borderBottom="3px solid "
          borderColor={couleur_tag_hover}
          bg={couleur_tag}
          css={css`
            opacity: 0;
            width: 100%;
            animation: ${fadeInLong} 1s ease 0s 1 normal forwards;
          `}
        >
          <Box height="185px" bg="#fff" pos="relative">
            <Box
              width="100%"
              height="100%"
              objectFit="cover"
              bgSize="cover"
              bgPos="top center"
              bgImg={catDataAcf.categorie_img.url}
              pos="relative"
            />
            <Box
              className="heyyy"
              width="100%"
              height="100%"
              position="absolute"
              zIndex="10"
              bgImage="linear-gradient(180deg, #FFFFFF 38%, #F5DDCC 100%);"
              opacity=".5"
              bottom="0"
              bgColor="transparent"
            />
          </Box>
          <Flex
            width="90%"
            height="5em"
            justifyContent="center"
            alignItems="center"
            pt="1em"
            margin="0 auto"
          >
            <Box w="15%">
              <Image
                objectFit="cover"
                bgSize="cover"
                borderRadius="7px"
                //ml="1em"

                src={catDataAcf.profile_cat.url}
              />
            </Box>
            <Box ml="1em" w="80%">
              <Heading
                fontSize={{ base: "12px", sm: "14px" }}
                color="#33344E"
                fontFamily="OpenSansBold"
                fontWeight="200"
                py=".5em"
              >
                {catData.name}
              </Heading>
              <Text
                fontSize={{ base: "10px", sm: "12px" }}
                color="#33344E"
                fontFamily="OpenSans"
                fontWeight="600"
              >
                {catData.description}
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default connect(CatCallToAction);
