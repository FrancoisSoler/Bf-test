import { Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { IoIosMenu } from "react-icons/io";

const MenuButton = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    display={{ base: "flex", md: "none" }}
    alignItems="center"
    justifyContent="flex-end"
    flexShrink="0"
    boxSize="36px"
    borderRadius="5px"
    bgColor="briefstory.menuIcon"
/*     mr={{ base: "auto", lg: "0" }}
    ml={{ base: "12px", md: "40px" }} */
    {...props}
  >
    <Box boxSize="15px" margin="0 auto" color="briefstory.blueIcon" as={IoIosMenu} />
  </Box>
));

export default MenuButton;
