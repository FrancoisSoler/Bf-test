import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { css } from "frontity";
import { PostImageHomeContainer } from "../featured-post/components";
import { formatDate } from "../helpers";

const PostPreviewAuth = ({ data, ...rest }) => {
  const { title, featured_media, link, categories, date, author, publishDate } =
    data;
  return (
    <Box
      display="inline-flex"
      as="article"
      direction="row"
      flexWrap="wrap"
      width="100%"
      bg="#f4fafb"
      height="100%"
      borderRadius="5px"
      justifyContent="space-between" 
      {...rest}
    >
      <Flex
        padding="0 0 5px 5px"
        alignItems="flex-start"
        justifyContent="flex-start"
        flex={{ base: ".95" /* sm: "1 1 5%" */ }}
        flexDir="column"
        color="#fff"
        pl=".4em"
        maxW="65%"
        flexWrap="wrap"
      >
        <Heading
          fontSize={{ base: "14px", sm: "16px", md: "18px" }}
          fontFamily="CatamaranBold"
          fontWeight="200"
          justifyContent="flex-start"
          color="#33344E"
          width="95%"
          pt="10px"
          pb="5px"
          css={css`
            @media (max-width: 300px) {
              font-size: 10px;
              //width: 95%;
            }
          `}
        >
          <Link link={link}>{title}</Link>
        </Heading>

        <Flex
          fontSize={{ base: "10px", sm: "12px", md: "14px" }}
          justifyContent="flex-start"
          alignItems="center"
          flexWrap={{ base: "wrap", sm: "nowrap" }}
          css={css`
            @media (max-width: 300px) {
              font-size: 8px;
            }
          `}
        >
          <Box
            //            fontSize={{ base: "8px", sm: "10px", md: "12px" }}
            color="#adadad"
          >
            {author.name}
          </Box>

          <Box mx=".5em" color="#adadad">
            {" "}
            ·{" "}
          </Box>
          <Box
            fontSize={{ base: "10px", sm: "12px", md: "14px" }}
            color="#adadad"
            fontFamily="OpenSans"
            css={css`
              @media (max-width: 300px) {
                font-size: 8px;
              }
            `}
          >
            {formatDate(publishDate)}
          </Box>
        </Flex>
      </Flex>
      {/* Use the frontity settings for featuredPost here */}
      {featured_media && featured_media.src && (
        <Link
          link={link}
          css={css`
            display: contents;
            max-width: fit-content;
          `}
        >
          <PostImageHomeContainer {...featured_media} />
        </Link>
      )}
    </Box>
  );
};

export default PostPreviewAuth;
