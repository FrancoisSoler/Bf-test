import { Box } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import { useWindowSize } from "../../hooks/UseViewPort";
import AProposMobile from "./a-propos-mobile";
import AProposDesktop from "./a-propos-desktop";

const APropos = ({ state }) => {
  const size = useWindowSize();

  return (
    <Box as="section">
      {size.width < 768 ? <AProposMobile /> : <AProposDesktop />}
    </Box>
  );
};
export default connect(APropos);
