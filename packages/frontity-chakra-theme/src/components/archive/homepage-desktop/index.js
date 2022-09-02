import { connect } from "frontity";
import { Box } from "@chakra-ui/react";
import React from "react";
import FirstBlock from "./first-block";
import SecondBlock from "./second-block";
import ThirdBlock from "./third-block";
import FourthBlock from "./fourth-block";
import FifthBlock from "./fifth-block";
import LastBlock from "./last-block";

const HomepageArchiveDesktop = () => {
  return (
    <Box  mt="2.5em" bg="#fff">
      <FirstBlock></FirstBlock>
      <SecondBlock></SecondBlock>
      <ThirdBlock></ThirdBlock>
      <FourthBlock></FourthBlock>
      <FifthBlock></FifthBlock>
      <LastBlock></LastBlock>
    </Box>
  );
};

export default connect(HomepageArchiveDesktop);
