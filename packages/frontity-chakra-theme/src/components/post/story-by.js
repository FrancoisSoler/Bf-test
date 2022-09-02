import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { css } from "frontity";
import Link from "@frontity/components/link";
//import Link from "../link";
const StoryAuthor = ({authorId, Home, Info }) => (
  <Box>
    {/* {console.log(authorId)} */}
    <Flex
      padding="2em 0 0 0"
      width={{ sm: "100%", lg: "30%" }}
      justifyContent="flex-start"
      alignItems="center"
      ml="18px"
    >
      <Text
        fontSize="xs"
        color="rgba(131, 134, 138, 0.62)"
        fontFamily="OpenSans"
        width={{ sm: "40%", lg: "30%" }}
      >
        story publiée par
      </Text>
      <Image
        mx=".5em"
        maxW="20px"
        borderRadius="2em"
        src={Info.avatar_urls[24]}
      />
      <Link
        fontSize="xs"
        fontFamily="OpenSans"
        link={Home}
        authorId={authorId}
        // href={Home}
        css={css`
          font-size: 0.7em;
          font-family: CatamaranBold;
        `}
      >
        {Info.name}
      </Link>
    </Flex>
  </Box>
);

export default StoryAuthor;
