import { Box, SimpleGrid } from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import ArchiveHeader from "./archive-header";
import ArchiveItem from "./archive-item";
import HomepageArchive from "./homepage-archive";
import Pagination from "./pagination";
import { decode } from "frontity";
import AuthorArchive from "./author-archive";
import PaginationNum from "../paginationNum";
import { getAllPost } from "../helpers";
import TagHeader from "./tag-header";
const ArchivePage = ({ actions, state, props }) => {
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
  const linkUrl = state.source.get(state.router.link).link;
  //console.log("data items", data.items);

  useEffect(() => {
    actions.source.fetch("users");
  }, []);
  const [allpost] = getAllPost(state, data.items);

  const extractedAuthor = linkUrl.substring(8);
  const extAutfinal = extractedAuthor.slice(0, extractedAuthor.length - 1);
  const allUsers = state.source.data["users/"].items;
  const authorByUrl = allUsers.filter((e) => e.slug === extAutfinal);

  //console.log("archive", authorByUrl[0].acf.auteur_sponsorise);
  const [isStoriesClicked, setClick] = useState(null);

  const StoriesClickHandler = () => {
    setClick("noparrain");
  };
  const StoriesParrainClickHandler = () => {
    setClick("parrain");
  };
  if (data.isHome) return <HomepageArchive />;

  const notShow =  data.next !== data.link
  return (
    <Box as="section"  >
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy &&data.isCategory && notShow && (
        <ArchiveHeader
          //showPattern={state.theme.showBackgroundPattern}
          taxonomy={data.taxonomy}
          title={decode(state.source[data.taxonomy][data.id].name)}
          state={state}
          data={data}
        />
      )}
      {data.isTag &&  <TagHeader state={state} />}

      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <AuthorArchive
          authorByUrl={authorByUrl}
          StoriesClickHandler={StoriesClickHandler}
          StoriesParrainClickHandler={StoriesParrainClickHandler}

        />
      )}

      <Box
        padding={{ base: "17px 14px 14px 14px", lg: "40px" }}
        bg={checkBg(data)}
        width={{ lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
        display={{ base: "block", md: "none" }}
        h="100%"
      >
        {/* Iterate over the items of the list. */}

        {isStoriesClicked === "parrain" ? (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5px">
            {allpost
              .filter((el) => el.acf.sponsor_iframe)
              .map(({ type, id }) => {
                const item = state.source[type][id];
                return (
                  <ArchiveItem
                    isAuthor={data.isAuthor}
                    key={item.id}
                    item={item}
                  />
                );
              })}
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5px">
            {allpost.map(({ type, id }) => {
              const item = state.source[type][id];
              return (
                <ArchiveItem
                  isAuthor={data.isAuthor}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </SimpleGrid>
        )}

        {!data.isHome ||
          (!data.isCategory && <Box width="100%" height="70vh" />)}
      </Box>
    </Box>
  );
};

export default connect(ArchivePage);
