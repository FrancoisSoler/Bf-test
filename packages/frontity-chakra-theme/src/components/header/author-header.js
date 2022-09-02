import React, { useEffect, useState } from "react";
import { styled, connect } from "frontity";
import { AiOutlineLeft } from "react-icons/ai";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import { images } from "../constants";
import { useWindowSize } from "../hooks/UseViewPort";
import Header from "./header";
const AuthorHead = ({ state }) => {
  const [authorIds, setItems] = useState(14);
  const linkUrl = state.source.get(state.router.link).link;

  useEffect(() => {
    const authorIds = localStorage.getItem("authorIds");
  }, []);
  // console.log("heyyyyyyy", authorIds);
  const extractedAuthor = linkUrl.substring(8);
  const extAutfinal = extractedAuthor.slice(0, extractedAuthor.length - 1);
  const allUsers = state.source.data["users/"].items;
  const authorByUrl = allUsers.filter((e) => e.slug === extAutfinal);
  let authorInfo;

  if (authorByUrl[0].id === authorIds) {
    authorInfo = state.source.author[parseInt(authorIds)];
    console.log("by id");
  } else {
    authorInfo = authorByUrl[0];
    console.log("by link");
  }
  const size = useWindowSize();

  return (
    <AuthorHeader>
      {size.width < 768 ? (
        <Box width="100%" height="100%" bg="#fff">
          <Flex
            width="92%"
            height="100%"
            bg="#fff"
            justifyContent="space-between"
            alignItems="center"
            margin="0 auto"
          >
            <Flex
              bg="#fff"
              width="4em"
              height="1.8em"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
            >
              <Link link="/" bg="#fff" padding=".5em" margin="0 2em 0 0">
                <AiOutlineLeft size="1.2em" />
              </Link>
            </Flex>

            <Heading
              display="inline-block"
              textAlign="center"
              fontSize="md"
              my="1em"
              fontFamily="OpenSans"
            >
              {authorInfo.name}
            </Heading>
            <Flex
              bg="#fff"
              width="4em"
              height="1.8em"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
            >
              <Link link="/" bg="#fff" padding=".5em" margin="0 2em 0 0">
                <Image margin="0 auto" maxW="60%" src={images.BfLogoBSquare} />
              </Link>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Header />
      )}
    </AuthorHeader>
  );
};

export default connect(AuthorHead);

const AuthorHeader = styled.div`
  width: 100%;
  height: 60px;
  font-size: 0.8em;
`;
