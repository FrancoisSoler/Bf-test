import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

function MenuDrawer({ children, ...props }) {
  return (
    <Drawer preserveScrollBarGap size="xs" placement="left" {...props}>
      <DrawerOverlay />
      <DrawerContent bg="briefstory.menu" px={8} >
        <DrawerCloseButton
          color="briefstory.blueIcon"
          padding="3"
          border="1px solid"
          top="32px"
        />
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
