import { Box } from "@chakra-ui/react";
import React from "react";

const PartenaireButton = (props) => (
  <Box
    mt="2em"
    aria-label="become partener"
    as="button"
    animation="transform 3s ease 3s 1 normal forwards"
    willChange="transform"
    bg="#fbac62;"
    boxShadow="#fbac62 0px 0px 5px 0px;"
    color="white"
    p=".8em"
    borderRadius="0.5em"
    fontFamily="Poppins"
    fontWeight="900"
    fontSize="16px"
    {...props}
    _hover={{
      transform: "translateY(-15px)",
      background: "#fbac62",
    }}
  >
    <Box margin="0 auto" color="briefstory.blueIcon" />
    Devenez Partenaire
  </Box>
);

export default PartenaireButton;
