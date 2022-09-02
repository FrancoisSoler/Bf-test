import { Box, Heading, Text } from "@chakra-ui/react";
import React,{useEffect} from "react";
import Link from "../link";
import PostCategories from "./post-categories";
import { formatDate } from "../helpers";
import { decode } from "frontity";

const PostHeader = ({
  heading,
  categories,
  description,
  author,
  date,
  isPage,
  authorLink,
  ...props
}) => {

  return ( 
  <Box  {...props}>
   {/* { console.log('sieufbs', author)} */}

    {categories && (
      <PostCategories
        color="#83868A9E"
        fontFamily="OpenSansBold"
        fontWeight="400"
        categories={categories}
        justifyContent="center"
      />
    )}
    <Heading
      color="#33344E"
      fontWeight="1000"
      size="16px"
      mt="15px"
      fontFamily="OpenSansBold"
      mb={{ base: "1.5em", lg: "2em" }}
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    {description && <Text mt={4}>{description}</Text>}
    {/* Don't show the author if we're on a page type */}
    {!isPage && author && (
      <Text fontSize="lg">
        by{" "}
        <Link fontWeight="bold" color="accent.400" link={author.link}>
          {decode(author.name)} 
        </Link>
      </Text>
    )}
    {/* Don't show the date if we're on a page type */}
    {!isPage && date && (
      <Text display="flex" justifyContent="center" fontSize="sm">
        {formatDate(date)}
      </Text> )}

  </Box>)
};

export default PostHeader;
