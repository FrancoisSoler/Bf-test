import { Modal, ModalCloseButton, ModalContent } from "@chakra-ui/react";
import React from "react";

const SearchModal = props => (
  <Modal preserveScrollBarGap {...props} motionPreset='slideInBottom'>
    <ModalContent
      width="100vw"
      my="0"
      padding="50px"
      maxWidth="100%"
      borderSpacing="15px"
      borderRadius="0"
      height="100vh"
      bg="rgba(24, 22, 23, 0.9)"
      css={{ backdropFilter: "blur(1px)" }}
    >
      {props.children}
      <ModalCloseButton size="lg" color="#fff" rounded="full" />
    </ModalContent>
  </Modal>
);

export default SearchModal;
