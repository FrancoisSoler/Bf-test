import React from "react";
import { styled, connect } from "frontity";
import { IoIosArrowBack } from "react-icons/io";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import { images } from "../constants";
const CatHead = ({ state }) => {
    const data = state.source.get(state.router.link);
    const catInfo = state.source.category[data.id].acf;

  return (
    <CategoryHeader>
      <Box width="100%" height="80px" bg={catInfo.couleur_tag_cta}>
        <Flex
          width="94%"
          height="100%"
          bg={catInfo.couleur_tag_cta}
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
        >
          <Flex
            bg={catInfo.couleur_bg_croix}
            width="36px"
            height="36px"
            padding=".5em"
            borderRadius="5px"
            justifyContent="center"
            alignItems="center"
          >
            <Link link="/a-propos/" bg="#fff" padding=".5em" margin="0 2em 0 0">
              <IoIosArrowBack size="1.2em" />
            </Link>
          </Flex>
          <Box   margin="0 auto " transform="translateX(-1.3em) " display="inline-flex">
            <Link link="/">
              <Image maxW="138px" src={images.BfLogo} />
            </Link>
          </Box>
        </Flex>
      </Box>
    </CategoryHeader>
  );
};

export default connect(CatHead);

const CategoryHeader = styled.div`
  width: 100%;
  height: 80px;
  font-size: 0.8em;
  
`;
