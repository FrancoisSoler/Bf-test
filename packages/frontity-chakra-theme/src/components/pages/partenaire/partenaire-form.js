import { Box, Flex, Icon } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";

// A11y: Add a hidden search button
const PartenaireForm = (props) => {
  return (
    <Flex
      as="form"
      //maxWidth="md"
      //mt="10em"
      mx="auto"
      pos="relative"
      width="100vw"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box minWidth="330px" mt="5em">
        <iframe
          src="https://tally.so/embed/V3qr7w?hideTitle=1&alignLeft=1"
          width="100%"
          height="600"
          margin="2em"
          css={css`
            section:first-of-type .form__FormRespondSection-sc-tpym31-3 {
              max-width: none;
            }
          `}
        ></iframe>
      </Box>
    </Flex>
  );
};

export default connect(PartenaireForm);
