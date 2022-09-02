import React, { useEffect, useState, useRef } from "react";
import { styled, connect, css } from "frontity";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "../link";
import { heartbeat } from "../styles/keyframes";
import { useWindowSize } from "../hooks/UseViewPort";
import AuthorDesktop from "./author-desktop";

const AuthorArch = ({
  authorByUrl,
  state,
  actions,
  StoriesClickHandler,
  StoriesParrainClickHandler,
}) => {
  const size = useWindowSize();

  const [authorIds, setItems] = useState(18);

  useEffect(() => {
    const authorIds = localStorage.getItem("authorIds");
  }, []);

  let authorInfo;

  if (authorByUrl[0].id === authorIds) {
    authorInfo = state.source.author[parseInt(authorIds)];
  } else {
    authorInfo = authorByUrl[0];
  }
  const data = state.source.get(state.router.link);

  console.log('data',data);

  useEffect(() => {
    actions.source.fetch("/?meta_key=nom_enteprise");
  }, []);

  const postMeta = state.source.get("/?meta_key=nom_enteprise");


  console.log('postùeta',postMeta);
  /*   const [disabled, setDisabled] = useState(false);
  const [reset, setReset] = useState(true); */
  const handleOnClick = (event) => {
    handleClick();
    StoriesParrainClickHandler();
  };
  const handleOnClickReset = (event) => {
    handleReset();
    StoriesClickHandler();
  };
  const buttonRef = useRef(null);

  const handleClick = (event) => {
    buttonRef.current.disabled = true;

    //console.log("button clicked");
  };

  const handleReset = (event) => {
    buttonRef.current.disabled = false;
  };

  return (
    <Box>
      {size.width > 768 ? (
        <AuthorDesktop authorInfo={authorInfo} />
      ) : (
        <AuthorArchive height="80vh">
          <Box as="section" height="100%" mb="17px" display="block">
            <Box margin="0 auto" alignItems="center" flexDirection="column">
              <Box overflow="hidden">
                <Box
                  width="1152px"
                  height="150px"
                  bgImage={`url(${authorInfo.acf.user_banner.url})`}
                  css={css`
                    aspect-ratio: 16/9;
                    width: 100%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    animation: ${heartbeat} 1s ease 0s 1 normal forwards;
                  `}
                ></Box>
              </Box>
              <Flex
                justifyContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
              >
                <Box margin="0 1.5em 0 0">
                  <Image
                    maxW="8em"
                    border="2px solid #fff"
                    src={authorInfo.avatar_urls[24]}
                    transform="translateY(-30px)"
                    ml="1em"
                    borderRadius=".8em"
                  />
                </Box>
                <Box alignSelf="center">
                  <Link
                    href={authorInfo.url}
                    borderRadius="5px"
                    boxShadow="0px 1px 1px 0px rgba(131, 134, 138, 0.42)"
                    border="1px solid #F7F7F8 "
                    color="#33344E"
                    fontFamily="OpenSans"
                    fontWeight="600"
                    fontSize="12px"
                    padding="9px"
                    display="flex"
                    alignItems="center"
                    mb="1em"
                    lineHeight="1em"
                  >
                    Profil Linkedin
                    <FiExternalLink
                      size="15"
                      css={css`
                        margin-left: 1em;
                        line-height: 1em;
                        font-weight: 900;
                      `}
                    />
                  </Link>
                </Box>
              </Flex>
              <Box ml="1em" borderStyle="solid" borderWidth="0px 0px 1px 0px">
                <Text
                  width="100%"
                  fontFamily="OpenSans"
                  color="#33344E"
                  fontSize="12px"
                >
                  {authorInfo.description}
                </Text>
                <Flex padding="2em 0" width="50%">
                  <Link href={authorInfo.url}>
                    <FaLinkedin size="15"> </FaLinkedin>
                  </Link>
                  <Link ml="1.5em" href={authorInfo.twitter}>
                    <FaTwitter size="15"></FaTwitter>
                  </Link>
                </Flex>
              </Box>

              <Flex
                borderRadius="10px"
                width="100%"
                paddingTop="20px"
                fontWeight="thin"
              >
                {authorByUrl[0].acf.auteur_sponsorise ? (
                  <Flex width="100%" justifyContent="space-around">
                    <StoriesButtons
                      ref={buttonRef}
                      onClick={handleOnClickReset}
                    >
                      Stories {authorInfo.name}
                    </StoriesButtons>
                    <StoriesButtons ref={buttonRef} onClick={handleOnClick}>
                      Stories parrainées
                    </StoriesButtons>
                  </Flex>
                ) : (
                  <StoriesButton>
                    Les stories de {authorInfo.name}
                  </StoriesButton>
                )}
              </Flex>
            </Box>
          </Box>
        </AuthorArchive>
      )}
    </Box>
  );
};

export default connect(AuthorArch);

const AuthorArchive = styled.div`
  width: 100%;
  font-size: 0.8em;
`;
const StoriesButton = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 12px;
  color: #33344e;
  font-weight: 600;
  font-family: OpenSans;
  width: 93%;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #f7f7f8;
`;

const StoriesButtons = styled.button`
  text-align: center;
  padding: 10px;
  font-size: 12px;
  color: #33344e;
  font-weight: 600;
  font-family: OpenSans;
  width: 42%;
  border-radius: 10px;
  /* box-shadow: ${bgBoxShadow}; */
  background-color: #f7f7f8;
`;
