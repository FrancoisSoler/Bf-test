import React from "react";
import { connect } from "frontity";
import useArchiveInfiniteScroll from "@frontity/hooks/use-archive-infinite-scroll";
import ArchivePage from "./archive-page";
import { Box, Button, Flex } from "@chakra-ui/react";
const Archive = ({ state }) => {
  const { pages, isFetching, isError, isLimit, fetchNext } =
    useArchiveInfiniteScroll();

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
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  return (
    <Box>
      {pages.map(({ Wrapper, key, link }) => (
        <Wrapper key={key}>
          <ArchivePage link={link} />
        </Wrapper>
      ))}
      {isFetching && (
        <Flex bg={checkBg(data)} height="5em" alignItems="center">
          <Box
            bg={checkBg(data)}
            margin="0 auto"
            padding="1em"
            fontFamily="OpenSans"
            color="briefstory.blueIcon"
            border="2px solid #4e4b5f"
            borderRadius="5px"
          >
            Chargement
          </Box>
        </Flex>
      )}
      {isLimit && (
        <Flex bg={checkBg(data)} height="5em" alignItems="center">
          <Button
            // display="inline-flex"
            bg={checkBg(data)}
            margin="0 auto"
            padding="1em"
            onClick={fetchNext}
            fontFamily="OpenSans"
            color="briefstory.blueIcon"
            border="2px solid #4e4b5f"
            borderRadius="5px"
          >
            Charger plus
          </Button>

          {isError && <Button onClick={fetchNext}>Essayer à nouveau</Button>}
        </Flex>
      )}
    </Box>
  );
};

export default connect(Archive);
