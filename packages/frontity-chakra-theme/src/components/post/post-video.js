import React from "react";
import Link from "../link";
import { decode } from "frontity";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import FeaturedMedia from "./featured-media";
import { css } from "frontity";

const PostVideo = ({ videocarre, videoArticle, post }) => (
  <Box>
    {videocarre ? (
      <>
        <Box
          position="relative"
          pt="100%"
          height="0"
          //width="100%"
          dangerouslySetInnerHTML={{ __html: decode(videocarre) }}
          css={css`
          &:nth-of-type(1) > iframe:nth-of-type(1) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
          }
          }
        `}
        ></Box>
      </>
    ) : videoArticle ? (
      <>
        <Box
          position="relative"
          pb="56.25%"
          height="0"
          width="100%"
          dangerouslySetInnerHTML={{ __html: decode(videoArticle)}}
          css={css`
          &:nth-of-type(1) > iframe:nth-of-type(1) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
          }
          }
        `}
        ></Box>
      </>
    ) : (
      <>
        {post.featured_media != null && (
          <FeaturedMedia id={post.featured_media.id} />
        )}
      </>
    )}
  </Box>
);

export default PostVideo;
