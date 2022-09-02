import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = props => (
  <Box
    aria-label="Search this site"
    as="button"
    display={{base: "flex", md:"none"}}
    alignItems="center"
    //mr={{ base: "12px", md: "40px" }}
    transition="background-color ease 0.25s"
  borderRadius="5px"
    flexShrink="0"
    boxSize="36px"
    bg="briefstory.menuIcon"
   // ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    <Box boxSize={4} margin="0 auto" color="briefstory.blueIcon" as={IoIosSearch} />
  </Box>
);

export default SearchButton;
