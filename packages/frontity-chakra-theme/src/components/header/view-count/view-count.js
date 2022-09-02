import React from "react";
import { styled, connect } from "frontity";
import { Box, Flex } from "@chakra-ui/react";
import { getPostData, formatPostData } from "../../helpers";
import PostViewCountDesktop from "./view-count-desktop";
import PostViewCountCross from "./view-count-cross";
import PostViewCountImg from "./view-count-img";
import PostViewCountCounter from "./view-count-counter";
import { useWindowSize } from "../../hooks/UseViewPort";

const PostViewCount = ({ state }) => {
  const postData = getPostData(state);
  const post = formatPostData(state, postData);
  // get the post id
  let postId = post.id;
  // get the article by postId
  let articleId = state.source.post[postId];
  // define the property name
  let post_count = "post_count_" + [postId];
  // get the view count
  let finalPc = articleId[post_count];
  const catId = parseInt(postData.categories.toString());
  // const bgColorArticle = state.source.tag[tagId].description
  const bgColorArticle = state.source.category[catId].acf.couleur_tag;
  const colorArticleSecondary =
    state.source.category[catId].acf.couleur_tag_secondaire;
  // colors for tags
  const colors = state.source.category[catId].acf;

  // render componenets depending on screen width
  const size = useWindowSize();

  return (
    <ViewCount>
      {size.width < 768 ? (
        <Box
          display={{ md: "none" }}
          width="100%"
          height="70px"
          bg={bgColorArticle}
        >
          <Flex
            width="94%"
            height="55px"
            bg={bgColorArticle}
            justifyContent="space-between"
            alignItems="center"
            margin="0 auto"
            pt="20px"
            position="relative"
          >
            <PostViewCountCross
              colorArticleSecondary={colorArticleSecondary}
              bgColor={colors.couleur_bg_croix}
            />

            <PostViewCountImg />
            <PostViewCountCounter finalPc={finalPc} />
          </Flex>
        </Box>
      ) : (
        <PostViewCountDesktop bgColorArticle = {bgColorArticle} />
      )}
    </ViewCount>
  );
};

export default connect(PostViewCount);

const ViewCount = styled.div`
  width: 100%;
  /* height: 60px; */
  font-size: 0.8em;
  height: 100%;
`;
