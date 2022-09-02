import { Box, CircularProgress } from "@chakra-ui/react";

const Loading = () => (
  <Box
    height="80vh"
    bg='briefstory.bg'
    mx="auto"
    p="24px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="inherit"
  >
    <CircularProgress
      css={{
        "[data-progress-indicator]": {
          color: "#eca419"
        }
      }}
      isIndeterminate
    />
  </Box>
);

export default Loading;
