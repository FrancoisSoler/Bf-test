import { Progress } from "@chakra-ui/react";

const PostProgressBar = props => (
  <Progress
    pos="fixed"
    color="briefstory.blueIcon"
    top={{ base: "1px", md: "70px" }}
    height="2px"
    zIndex={2}
    width="92%"
    min={0}
    max={70}
    bg="transparent"
    css={theme => ({
      div: {
        backgroundColor: theme.colors.briefstory.blueIcon
      }
    })}
    {...props}
  />
);

export default PostProgressBar;
