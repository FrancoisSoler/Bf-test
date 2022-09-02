import { usePostTypeInfiniteScroll } from "@frontity/hooks";
import { connect, styled, css } from "frontity";
import React, { useEffect, useState, useRef } from "react";
import Loading from "../loading";
import Post from "./post";
import List from "../archive";
import ReactFullpage, { fullpage_api } from "@fullpage/react-fullpage"
import { Box, Flex } from "@chakra-ui/react";
import { getPostData, formatPostData } from "../helpers";
import PostPrevInfinite from "./post-prev-infinite";


const PostList = ({ actions, state }) => {

  const postData = getPostData(state);
  const post = formatPostData(state, postData);
  const catId = parseInt(postData.categories.toString());
  // const bgColorArticle = state.source.tag[tagId].description
  const bgColorArticle = state.source.category[catId].acf.couleur_tag;
  const colorsHover = state.source.category[catId].acf.couleur_tag_footer;

  const data = state.source.get(state.router.link);

  const { posts, isLimit, isFetching, isError, fetchNext } =
    usePostTypeInfiniteScroll({ limit: 10 });

  const nextImgArray = posts.map((e) => e.key);
  const [isSponso, setSponso] = useState(postData.acf.sponsor_iframe !== undefined);
  const nextImg = nextImgArray.slice(-1)[0];
  function onclick(fullpage_api) {
    if (typeof window !== 'undefined') {
      fetchNext;
      window.fullpage_api.destroy('all');
      window.fullpage_api.reBuild();
      window.fullpage_api.moveSectionDown();
      console.log('it worked')
    }
  }

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);
  console.log(posts)

  return (
    <Box className="boxWrapper" py="2em">

      <ReactFullpage
        //fullpage options
        licenseKey='7C2262BC-E6044700-BA605146-B340179C'
        scrollOverflow={true}
        verticalCentered={true}

        //normalScrollElements= '.scrollable-content'
        // scrollOverflowReset={true}
        // onLeave={fullpage_api.destroy('all')}
        //afterLoad={fetchNext()}
        render={({ state, fullpage_api }) => {
          return (

            <ReactFullpage.Wrapper >
              {posts.map(({ key, link, isLast, Wrapper, i }) => (

                <Wrapper key={key} className="section fp-auto-height" >
                  <Box >

                    <Post
                      post={post}
                      postData={postData}
                      link={link}
                      catId={catId}
                      bgColorArticle={bgColorArticle}
                      posts={posts}
                      isLast={isLast}
                      key={key}
                      isSponso={isSponso}

                    />

                    <PostPrevInfinite
                      bgColorArticle={bgColorArticle}
                      nextImgArray={nextImgArray}
                      // display={isLast ? "none" : "flex"}
                      className="PostPrevInfinite"
                      isSponso={isSponso}
                    />


                    {!isLast && <hr />}
                  </Box>
                </Wrapper>
              ))}

            </ReactFullpage.Wrapper>

          );
        }}
      />
      < Container
        css={css`
          background: ${bgColorArticle};
        `}
      >
        {isFetching && <Loading />}
        {
          (isLimit || isError) && (
            <Button
              onClick={fetchNext}
              css={css`
              background: ${colorsHover};
              transition: all 0.3s ease-in-out;
              &:hover {
                transform: scale(0.9);
              }
            `}
            >
              {isError ? "Essayer à nouveau" : "Charger plus"}
            </Button>
          )
        }
      </Container >
    </Box >
  );
};

export default connect(PostList);

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  /* background: ${colorsHover}; */
  color: #33344e;
  padding: 12px;
  font-weight: bold;
  font-family: OpenSans;
  border: 2px solid #fff;
  border-radius: 5px;
`;
