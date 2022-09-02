import { Flex, Icon, Input } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import useSearch from "../hooks/useSearch";

// A11y: Add a hidden search button
const SearchForm = props => {
  const { form, input } = useSearch(props);
  return (
    <Flex
      as="form"
      maxWidth="md"
      mx="auto"
      pos="relative"
      width="100%"
      height="80%"
      justifyContent="center"
      alignItems="center"
      {...form}
    >
      <Input
        
        placeholder="Entrer pour rechercher"
        _placeholder={{ fontSize: '.7em', fontStyle: 'italic' }}
        variant="outline"
        size="xs"
        borderRadius="15"
        color="#fff"
        bg="rgba(24, 22, 23, 0.9)"
        margin="1.5em 0"
        padding="1em"
        fontSize={{ base: "20px", md: "26px" }}
        height="auto"
        focusBorderColor="briefstory.yellow"
        py={{ base: 1, md: 3 }}
        {...input}
      />
      <Icon
        name="search"
        size="1.5rem"
        color="#fff"
         position="absolute"
        right="5"
      />
    </Flex>
  );
};

export default connect(SearchForm);
