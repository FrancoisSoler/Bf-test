import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import Link from "../../link";
import { ImQrcode } from "react-icons/im";
import { fadeInLong, fadinInRight } from "../../styles/keyframes";
import Lottie from "react-lottie";
import bikeBg from "./../../../assets/bike_animation_loop_nobg.json";
import { images } from "../../constants";
const FirstBlock = ({ state, libraries }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  //lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" },
    animationData: bikeBg,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMax",
    },
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{ sm: "column", lg: "row" }}
      width="100%"
      height="100%"
    >
      <Flex
        borderRadius="20px"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        bg="#faefe7"
        width={{ sm: "43em", md: "90%", lg: "1060px" }}
        height={{ md: "32.18em", lg: "578px" }}
        padding={{ sm: ".5em 2em", lg: "0 80px 100px 80px" }}
        margin={{ sm: "1em", lg: "2em" }}
        flexWrap="wrap"
        boxShadow="0px 0px 16px -1px rgba(131, 134, 138, 0.42)"
      >
        <Flex
          flexDirection="column"
          width="52%"
          justifyContent="center"
          bg="#faefe7"
          height="80%"
        >
          <Heading
            size="sm"
            fontSize="sm"
            css={css`
              opacity: 0;
              width: 100%;
              color: rgba(131, 134, 138, 0.42);
              font-weight: 600;
              font-family: Catamaran;
              font-size: 16px;
              letter-spacing: 0.5px;
              text-transform: uppercase;
              animation: ${fadeInLong} 1s ease 0s 1 normal forwards;
              padding-bottom: 1.2em;
            `}
          >
            le media au carrefour de l'innovation
          </Heading>
          <Heading
            fontSize={{ md: "2em", lg: "40px" }}
            fontFamily="CatamaranBold"
            css={css`
              font-weight: 200;
              opacity: 0;
              color: #33344e;
              line-height: 60px !important;
              animation: ${fadeInLong} 1.1s ease 0.3s 1 normal forwards;
            `}
          >
            Des histoires courtes et inspirantes
          </Heading>
          <Text
            fontFamily="OpenSans"
            mt=".5em"
            css={css`
              color: rgba(51, 52, 78, 0.62);
              opacity: 0;
              font-family: "OpenSans";
              font-size: 18px;
              font-weight: 400;
              line-height: 34px;
              flex-wrap: wrap;
              animation: ${fadeInLong} 1.2s ease 0.5s 1 normal forwards;
            `}
          >
            Bienvenue sur briefstory ! Découvrez, explorez et partagez les
            histoires les plus inspirantes du jour à travers des liens, des
            stories, des vidéos de choix 😎
          </Text>
        </Flex>
        <Flex
          justifyContent="flex-start"
          //mb={{ sm: "1em", lg: "1em" }}
          alignItems="center"
          width={{ md: "60%", lg: "52%" }}
          heigh="8em"
          position=" relative"
          top="-20px"
        >
          <Box
            css={css`
              opacity: 0;
              animation: ${fadeInLong} 1.5s ease 0.6s 1 normal forwards;
            `}
          >
            <Button
              css={css`
                  animation: transform 1s ease 0.6s 1 normal forwards;
                  will-change: transform;
                  padding: 5px;
                  width: 225px;
                  height: 48px;
                  font-family: "PoppinsBold";
                  font-size: 15px;
                  font-weight: 700;
                  fill: #FFFFFF;
                  line-height: 24px;
                  color: #FFFFFF;
                  background-color: #FBAC62;
                  border-radius: 10px 10px 10px 10px;
                  box-shadow: 0px 0px 5px 0px #FBAC62;
                  &:hover {
                   transform: translateY(-15px);
                   background: #fbac62;
                `}
            >
              <Link fontWeight="700" href="/#flash">
                Disponible sur mobile
              </Link>
            </Button>
          </Box>
          <Box
            css={css`
              width: 40%;
              opacity: 0;
              animation: ${fadinInRight} 1s ease 1.3s 1 normal forwards;
              display: flex;
              justify-content: center;
              padding-left: 1em;
              font-weight: 600;
              align-items: center;
            `}
          >
            <ImQrcode color="#b2adae" size="18px"></ImQrcode>
            <Link
              fontFamily="poppins"
              fontSize="16px"
              fontWeight="bold"
              pl=".5em"
              color="#404757"
              href="/#flash"
              _hover={{ color: "briefstory.yellow" }}
            >
              Voir le QR Code
            </Link>
          </Box>
        </Flex>
        <Box
          mb="-2em"
          width={{ sm: "40%", lg: "429px" }}
          css={css`
            opacity: 0;
            animation: ${fadinInRight} 1s ease 1.5s 1 normal forwards;
          `}
        >
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default connect(FirstBlock);
