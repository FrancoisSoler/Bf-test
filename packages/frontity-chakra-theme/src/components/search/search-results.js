import { Box, Button, Heading, Input, Text, Stack } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import Archive from "../archive";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";
import useSearch from "../hooks/useSearch";

const SearchHeader = ({ label, title, ...props }) => (
  <Box mt="120px">
    <Heading
      size="md"
      as="h6"
      fontWeight="medium"
      textTransform="uppercase"
    >
      {label}
    </Heading>

    <Heading
      mt={4}
      fontWeight="medium"
      as="h1"
      textTransform="uppercase"
      fontSize="3.5rem"
      
    >
      {title}
    </Heading>
  </Box>
);

const SearchResultTitle = ({ resultCount, query }) => (
  <SearchHeader
    title={`‘${query}’`}
    label={`${resultCount} ${resultCount > 1 ? "resultats" : "result"} pour`}
  />
);

const NoResultTitle = ({ query }) => (
  <SearchHeader label={`0 aucun resultats pour`} title={`‘${query}’`} />
);

const NoResultContent = props => (
  <Box
    p="80px"
    maxW="1400px"
    position="relative"
    mx="auto"
    mt="-60px"
    bg="briefstory.bg"
    width="100%"
    {...props}
  />
);

const SearchForm = connect(props => {
  const { form, input } = useSearch(props);
  return (
    <Stack mt="40px" as="form" direction="row" align="stretch" {...form}>
      <Input
        focusBorderColor="accent.400"
        placeholder="Search..."
        size="lg"
        rounded="0"
        {...input}
      />
      <Button type="submit" rounded="0" colorScheme="accent" size="lg">
        Search
      </Button>
    </Stack>
  );
});

export const SearchResults = ({ state }) => {
  const data = state.source.get(state.router.link);
  // Get the total pages that match the current path/url
  const isEmpty = data.total === 0;

  return (
    <Box bg="briefstory.bg">
      <PatternBox
         mb="-60px"
      >
        <PatternBoxInner margin={'0 auto'} textAlign={'center'}>
          {isEmpty ? (
            <NoResultTitle query={data.searchQuery.replace(/\+/g, " ")} />
          ) : (
            <SearchResultTitle
              query={data.searchQuery.replace(/\+/g, " ")}
              resultCount={data.total}
            />
          )}
        </PatternBoxInner>
      </PatternBox>

      {isEmpty ? (
        <NoResultContent>
          <Box maxW="600px" mx="auto">
            <Text fontSize="xl" textAlign="center">
              We could not find any results for your search. You can give it
              another try through the search form below.
            </Text>
            <SearchForm />
          </Box>
        </NoResultContent>
      ) : (
        <Archive/>
      )}
    </Box>
  );
};

export default connect(SearchResults);
