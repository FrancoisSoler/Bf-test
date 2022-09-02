import { Box, Text, Flex, Button, Image, background } from "@chakra-ui/react";
import { connect, styled, css } from "frontity";
import React, { useEffect, useState, useRef } from "react";
import List from "../archive";
import useScrollProgress from "../hooks/useScrollProgress";
import Link from "@frontity/components/link";
import Section from "../styles/section";
import { formatDate } from "../helpers";
import FeaturedMedia from "./featured-media";
import PostHeader from "./post-header";
import PostProgressBar from "./post-progressbar";
import SharingButtons from "./social-share";
import { FaArrowCircleRight } from "react-icons/fa";
import StoryAuthor from "./story-by";
import PostVideo from "./post-video";
import PostDesktop from "../archive/post-desktop";
import { useWindowSize } from "../hooks/UseViewPort";
import PostAd from "./post-ad";
import PostPrevInfinite from "./post-prev-infinite";
import { motion, onViewportLeave, useAnimation } from "framer-motion";

const Post = ({
  props,
  state,
  actions,
  libraries,
  post,
  postData,
  catId,
  bgColorArticle,
  posts,
  isLast,
  isSponso
  
}) => {
  // retrieve data in rest API
  const linkCta = postData.acf.lien_call_to_action_;
  const textCta = postData.acf.texte_cta;
  const data = state.source.get(state.router.link);

  // look for the id first

  const tagUrl = state.source.get(postData.acf.supertag1_url);
  const tagIdUrl = tagUrl.link;
  let tagId = parseInt(tagIdUrl.match(/\d+/)[0]);
  // once we have the id we go for the link
  // let's mix everything together
  const tagLinkId = state.source.tag[tagId].link;

  const colorArticleSecondary =
    state.source.category[catId].acf.couleur_tag_secondaire;
  const videoArticle = postData.acf.video_169;
  const videocarre = postData.acf.Video_carree;
  const postId = post.id;
  const authorId = state.source.post[postId].author;
  const authorInfo = state.source.author[authorId];
  const homelink = "/author/" + /* [authorInfo.id] + "/" + */ [authorInfo.slug];
  // array of author id for check story by compo
  let arrayId = [14, 18, 21, 22];
  let isAuthorId = arrayId.includes(authorId);
  // colors for tags
  const colors = state.source.category[catId].acf;
  const colorsHover = state.source.category[catId].acf.couleur_tag_cta_hover;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  //overlay over post video
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    //  toggle isActive state on click
    setIsActive((current) => !current);
  };

  const size = useWindowSize();

  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);
  const [refs, scroll] = useScrollProgress();


  //console.log("inview", data.link === nextImg);
  //set authorid on localstorage
  const [authorIds, setItems] = useState(authorId);

  useEffect(() => {
    localStorage.setItem("authorIds", JSON.stringify(authorIds));
    if (authorIds) {
      setItems(authorIds);
    }
  }, []);

  //set authorid on localstorage
  const [textTag, setTags] = useState(postData.acf.supertag1_texte);
  useEffect(() => {
    localStorage.setItem("textTag", JSON.stringify(textTag));
    if (textTag) {
      setTags(textTag);
    }
  }, []);

    const [loading,setLoading] = useState(true);

/*   useEffect(() => {
    if (isSponso = true ) {

    }
    setTimeout(() => {
      setLoading(false);
    },3000);
  },[]); */
  // Load the post, but only if the data is ready.
  if (!postData.isReady) return null;
  return (
    <Box bg={bgColorArticle} pt=".1em" ref={refs}>
      {size.width > 768 ? (
        <PostDesktop postData={postData} bg={bgColorArticle} />
      ) : (
        <Box pb="2em">
          <Box pb="1.4em">
            <Flex
              date={post.publishDate}
              className="date"
              fontSize="12px"
              fontFamily="OpenSans"
              fontWeight="500"
              alignItems="flex-end"
              justifyContent="center"
              height="2.5em"
              pr=".5em"
              color="rgba(131, 134, 138, 0.42)"
            >
              {formatDate(post.publishDate)}
            </Flex>
          </Box>
          {/* Look at the settings to see if we should include the featured image */}
          <Section bg="white" borderRadius="1em">
            <Box position="relative">
              {/* overlay on top of video */}
              {post.featured_media != null &&
                videoArticle != null &&
                videocarre != null && (
                  <FeaturedMedia
                    position="absolute"
                    zIndex="10"
                    display={isActive ? "none" : "block"}
                    onClick={handleClick}
                    id={post.featured_media.id}
                    width="100%"
                    height="100%"
                    bottom="0"
                    videoArticle={videoArticle}
                    videocarre={videocarre}
                  />
                )}

              <PostVideo
                videoArticle={postData.acf.video_169}
                videocarre={postData.acf.Video_carree}
                post={post}
              />
            </Box>

            <Box>
              <PostHeader
                mt={{ base: "5px", lg: "4rem" }}
                px={{ base: "12px", md: "0" }}
                //categories={post.categories}
                fontWeight="lighter"
                fontFamily="OpenSansBold"
                heading={post.title}
                lineHeight="1.5em"
                width="95%"
                letterSpacing="0"
                fontSize="16px"
                //author={post.author}
                isPage={postData.isPage}
              />
            </Box>
            <Link link={tagLinkId}>
              <Box
                display="inline-block"
                color="rgba(131, 134, 138, 0.62);"
                padding=".8em"
                bg={bgColorArticle}
                ml="12px"
                borderRadius="10px"
                fontSize="10px"
                fontFamily="OpenSansBold"
                css={css`
                  transition: all 0.3s ease-in-out;
                  &:hover {
                    transform: scale(0.9);
                    background-color: ${colors.couleur_tag_cta};
                  }
                `}
              >
                {postData.acf.supertag1_texte}
              </Box>
            </Link>
            {isAuthorId && (
              <StoryAuthor
                authorId={authorId}
                Home={homelink}
                Info={authorInfo}
              />
            )}
            {!postData.isPage && (
              <PostProgressBar value={scroll} bgh={colorsHover} />
            )}

            {/* Render the content using the Html2React component so the HTML is processed
     by the processors we included in the libraries.html2react.processors array. */}
            <Content
              as={Section}
              px={{ base: "5px", md: "0" }}
              size="md"
              pt="5px"
              fontFamily="Lora"
              mt=".5em"
              mb="4em"
              css={css`
                * > div {
                  &:after {
                    background: ${colorsHover};
                  }
                }
              `}
            >
              <Html2React html={post.content} />
            </Content>
            <Flex justifyContent="center" pb="3em" alignItems="center">
              <Button
                leftIcon={<FaArrowCircleRight color="#33344e" />}
                max-width="60%"
                bg={colors.couleur_tag_footer}
                fontSize="xs"
                boxShadow="0px 1px 2px 0px rgba(131, 134, 138, 0.62);"
                css={css`
                  transition: all 0.3s ease-in-out;
                  &:hover {
                    transform: scale(0.9);
                    background-color: ${colorsHover};
                  }
                `}
              >
                <Link
                  link={linkCta}
                  css={css`
                    word-break: break-word;
                  `}
                >
                  {textCta}
                </Link>
              </Button>
            </Flex>
            <Flex
              width="100%"
              height="3.5em"
              borderRadius="0 0 10px 10px"
              bg={colors.couleur_tag_footer}
              justifyContent="space-evenly"
              alignItems="center"
              boxShadow={
                catId === 29 && "0px 1px 2px 0px rgba(131, 134, 138, 0.62)"
              }
            >
              <SharingButtons
                link={state.router.link}
                title={post.title}
                excerpt={post.excerpt}
              />
            </Flex>

          </Section>
        </Box>
      )}
    </Box>
  );
};

export default connect(Post);

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  color: #33344e;
  word-break: break-word;

  * {
    max-width: 100%;
  }
  b {
    font-size: 16px;
    font-family: CatamaranBold;
  }
  ul {
    padding: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
