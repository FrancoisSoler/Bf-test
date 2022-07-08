import React from "react";
import { styled, connect, css } from "frontity";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { getPostData, formatPostData, omitConnectProps } from "../helpers";
import Link from "../link";
import { FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
const AuthorHead = ({ state }) => {
  /*   const postData = getPostData(state);
  const post = formatPostData(state, postData); */
  const data = state.source.get(state.router.link);

  const authorId = data.id;
  const authorInfo = state.source.author[authorId];

  console.log("heyyy", data);
  return (
    <AuthorHeader>
      <Box as="section" height="100%" display="block">
        <Box margin="0 auto" alignItems="center" flexDirection="column">
          <Box overflow="hidden">
            <Box
              width="1152px"
              height="150px"
              // bgImage={`url(${authorInfo.acf.user_banner.url})`}
              css={css`
                aspect-ratio: 16/9;
                background-size: 100%;
                background-repeat: no-repeat;
              `}
            ></Box>
          </Box>
          <Flex
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box margin="0 1.5em 0 0">
              <Image
                maxW="10em"
                border="2px solid #fff"
                src={authorInfo.avatar_urls[24]}
                transform="translateY(-30px)"
                ml="1em"
                borderRadius=".8em"
              />
            </Box>
            <Box alignSelf="center">
              <Link
                href={authorInfo.url}
                borderRadius="5px"
                boxShadow="0px 1px 1px 0px rgba(131, 134, 138, 0.42)"
                border="1px solid #F7F7F8 "
                color="#33344E"
                fontFamily="OpenSans"
                fontWeight="600"
                fontSize="xs"
                padding="9px"
                display="flex"
                alignItems="center"
                mb="1em"
                lineHeight="1em"
              >
                Profil Linkedin
                <FiExternalLink
                  size="15"
                  css={css`
                    margin-left: 1em;
                    line-height: 1;
                    font-weight: 900;
                  `}
                />
              </Link>
            </Box>
          </Flex>
          <Box ml="1em">
            <Text
              width="100%"
              fontFamily="OpenSans"
              color="#33344E"
              fontSize="xs"
            >
              {authorInfo.description}
            </Text>
            <Flex padding="1.3em .3em" width="50%">
              <Link href={authorInfo.url}>
                <FaLinkedin size="15"> </FaLinkedin>
              </Link>
              <Link ml="1.5em" href={authorInfo.twitter}>
                <FaTwitter size="15"></FaTwitter>
              </Link>
            </Flex>
          </Box>

          <Box bg="#f7f7f8" width="95%" margin="0 auto" borderRadius=".5em">
            <Text
              textAlign="center"
              padding="10px"
              fontSize="xs"
              color="#33344E"
              fontWeight="600"
              fontFamily="OpenSans"
            >
              Les stories de {authorInfo.name}
            </Text>
          </Box>
        </Box>
      </Box>
    </AuthorHeader>
  );
};

export default connect(AuthorHead);

const AuthorHeader = styled.div`
  width: 100%;
  font-size: 0.8em;
`;
