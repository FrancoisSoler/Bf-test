import { Box, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { getAllPost } from "../helpers";
import ArchiveItem from "./archive-item";
import { formatDate } from "../helpers";
import { useWindowSize } from "../hooks/UseViewPort";
import HomepageArchiveDesktop from "./../archive/homepage-desktop/index.js";
import PpaItem from "./ppa-item";
import { images } from "../constants";
import PageList from "./home-infinite";
//import  useMatchMedia  from "../hooks/UseViewPort.js";
const HomepageArchive = ({ state, libraries }) => {
  let today = new Date();
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const [allpost] = getAllPost(state, data.items);
  const author = Object.values(state.source.author);
  const authFilter = author.filter((el) => el.acf.featured_author);

  const filterValue = authFilter
    .map((x) => x.id)
    .sort(function () {
      return 0.5 - Math.random();
    })[0];
  // render componenets depending on screen width
  const size = useWindowSize();

  return (
    <Box as="section" bg={{ base: "briefstory.bg", md: "#fff" }}>
      {size.width > 768 ? (
        <HomepageArchiveDesktop />
      ) : (
        <Box pt={data.link == "/" ? "4.5em" : "0"} bg="briefstory.bg">
           {data.link == "/" && (
          <Flex
            className="date"
            fontSize="12px"
            fontFamily="OpenSans"
            fontWeight="500"
            alignItems="flex-end"
            justifyContent="center"
            height="2.5em"
            pr=".5em"
            color="rgba(131, 134, 138, 0.42)"
          >
            {formatDate(today)}
          </Flex>
           )}
          <Box
            px={{ base: "14px", md: "40px" }}
            width={{ base: "auto", lg: "80%" }}
            display={{ base: "block", md: "none" }}
            overflow="hidden"
          >
            <SimpleGrid
              mt={data.link == "/" ? "20px" : "5px"}
              columns={{ base: 1 /* md: 2 */ }}
              spacing="5px"
            >
              {allpost
                .slice(0, 9)
                .filter((authors) => authors.author !== filterValue)
                .map(({ type, id }) => {
                  const item = state.source[type][id];

                  return <ArchiveItem key={item.id} item={item}></ArchiveItem>;
                })}
              {allpost
                .slice(0, 20)
                .filter((authors) => authors.author == filterValue)
                .map(({ type, id }) => {
                  const item = state.source[type][id];

                  return <PpaItem key={item.id} item={item}></PpaItem>;
                })}
              {data.link == "/" && (
                <Box w="100%" h="20em">
                  <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    src="https://briefstory.staging.tempurl.host/?mailpoet_form_iframe=5"
                    onload="var _this = this; window.addEventListener('message', function(e) {if(e.data.MailPoetIframeHeight){_this.style.height = e.data.MailPoetIframeHeight;}})"
                    allowtransparency="true"
                  ></iframe>
                </Box>
              )}

              {allpost
                .slice(9, 20)
                .filter((authors) => authors.author !== filterValue)
                .map(({ type, id }) => {
                  const item = state.source[type][id];

                  return <ArchiveItem key={item.id} item={item}></ArchiveItem>;
                })}
            </SimpleGrid>

            {/* <PageList/> */}
            {/*  <Box pos="relative" width="100%" height="15em" bg="#faefe7" /> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default connect(HomepageArchive);
