import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { decode } from "frontity";

export const PostCategory = props => (
  <Box
   // px="5px"
    color={"#adadad"}
    fontFamily="OpenSans"
    fontWeight="normal"
    display="inline-block"
    {...props}
  />
);

export const PostCategories = ({
  categories,
  limit = 3,
  color="#ADADAD",
  ...props
}) => {
  const limitCategories =
    categories.length > limit
      ? categories.filter((_, idx) => idx < limit)
      : categories;

  return (
    <Flex   {...props} >
      {limitCategories.map(category => (
        <PostCategory key={category.id} mr="6px" >
          <Link 
            link={category.link}
            dangerouslySetInnerHTML={{ __html: decode(category.name) }}
          />
        </PostCategory>
      ))}
    </Flex>
  );
};

export default PostCategories;
