import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect,css } from "frontity";
import Link from "./link";
import { images } from "./constants";
const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bottom="0"
    {...props}
  />
);
const FooterSectionGroup = (props) => (
  <SimpleGrid
    maxWidth="1150px"
    mx="auto"
    width="100%"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <Box
    mx="auto"
    width="100%"
    padding="10px"
    color="#858196"
    textAlign="center"
    fontFamily="Muli"
    {...props}
  />
);

const InnerWave = () => (
  <Box
  width="100vw"
  height="30em"
  margin="0 auto"
  position="relative"
  overflow="hidden"
  transform="translateX(-10px) "
>
  <Box
    position="relative"
    left="calc(-50vw + 50%)"
    bg="#fff"
    width="100vw"
    overflow="hidden"
    height="100%"
    display="flex"
    justifyContent="space-between"
    flexDir="column"
  >
    <Box
      width="100%"
      height="100%"
      css={css`
        background-image: url(${images.waveBg});
        width: calc(300% + 1.3px);
        height: 143px;
        z-index: 1;
        display: block;
        position: relative;
        left: 50%;
        background-size: cover;
        transform: translateX(-50%) rotateY(180deg);
        overflow: hidden;
      `}
    />
    <Box
      width="100%"
      height="100%"
      transform="rotate(180deg) "
      css={css`
        background-image: url(${images.waveBg});
        width: calc(300% + 1.3px);
        overflow: hidden;

        height: 143px;
        z-index: 1;
        display: block;
        position: relative;
        
        left: 50%;
        background-size: cover;
        transform: translateX(-50%)  rotate(180deg);
      `}
    />
  </Box>
</Box>
);
const Footer = ({ state }) => {
  const data = state.source.get(state.router.link);

  if (data.isPostType) return null;
  function checkBg(data) {
    if (data.isAuthor) {
      return "#f7f7f8";
    }
    if (data.isCategory) {
      return state.source.category[data.id].acf.couleur_tag;
    } else {
      return "#faefe7";
    }
  }
  return (
    <>
    {data.isHome &&(<InnerWave/>) }
    <FooterSection
      borderStyle="solid"
      borderWidth="1px 0px 0px 0px"
      borderColor="#E8DFDD"
      alignSelf="flex-end"
      bg={checkBg(data)}
      color="#858196"
      pt="30px"
      pb="20px"
    >
      <FooterSectionGroup fontSize="12px" fontFamily="heading" >
        <FooterSectionItem>
          © 2022 briefstory. Tous droits réservés
        </FooterSectionItem>

        <FooterSectionItem>
          <SocialMenu
            ml="0"
            justifyContent="center"
            menu={state.theme.socialLinks}
          />
        </FooterSectionItem>
      </FooterSectionGroup>
    </FooterSection>
    </>
  );
};

export default connect(Footer);
