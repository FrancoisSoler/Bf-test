import React from "react";
import { connect, css } from "frontity";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import ArchiveItem from "../archive/archive-item";
import { formatDate } from "../helpers";
const AuthorPage = ({ state, actions, api }) => {
  const data = state.source.data;
  const linkUrl = state.source.get(state.router.link).link;
  const authorInfo = data[linkUrl].author;
  const authorPost = data.postA;
  //const authorID = data.author.id;
  //const postAuthor = state.source.postA;

  return (
    <Box as="section" >
      <Box margin="0 auto" alignItems="center" flexDirection="column" fontFamily="OpenSans" color="#33344E">

        <Box overflow="hidden">
          <Box
            width="1152px"
            height="150px"
            bgImage={`url(${authorInfo.acf.user_banner.url})`}
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
              fontSize="12px"
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
            fontSize="13px"
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

        <Box bg="#f7f7f8" width="95%" margin="0 auto" borderRadius=".5em" boxSizing="border-box">
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
          <SimpleGrid
            mt={{ base: "40px", md: "20px" }}
            columns={{ base: 1, md: 2 }}
            spacing="10px"
            bg="#f7f7f8"
            justifyContent="center"
          >
            {authorPost.map((ap) => {
              return (
                <Flex width="95%" bg="#fff" p="1em" key={ap.id}>
                  <Box width="70%">
                    <Link href={ap.link} textDecoration="none">
                      <Heading mb="2em" p=".5em 1em" fontSize="xs">
                        {ap.title.rendered}
                      </Heading>
                    </Link>
                    <Text
                      fontSize="9px"
                      fontFamily="OpenSans"
                      lineHeight="1.em"
                      maxW="95%"
                    >
                      {authorInfo.name} · {formatDate(ap.date)}
                    </Text>
                  </Box>
                  <Image
                    maxW="35%"
                    borderRadius="10px"
                    src={ap.featured_image_src}
                    css={css`
                      aspect-ratio: 4/3;
                      filter: brightness(98%) contrast(100%) saturate(100%)
                        blur(0px) hue-rotate(0deg);
                    `}
                  />
                </Flex>
              );
            })}
          </SimpleGrid>
          <Box
            css={css`
              background: linear-gradient(
                0deg,
                #faefe7,
                #fbf1ea,
                #fcf4ee,
                #fcf6f1,
                #fdf8f5,
                #fefaf8,
                #fefdfc,
                #ffffff
              );
              width: 100%;
              height: 250px;
            `}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default connect(AuthorPage);
