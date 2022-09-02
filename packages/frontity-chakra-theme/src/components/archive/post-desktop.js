import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/layout";
import { connect } from "frontity";
import { QRCodeCanvas } from "qrcode.react";

const PostDesktop = ({ state, data, postData, ...rest }) => {
  /*   const { title, featured_media, link, categories, date, author, publishDate } =
    data; */
  const postLink = "http://localhost:3000" + state.router.link;
  const catId = parseInt(postData.categories.toString());
  // const bgColorArticle = state.source.tag[tagId].description
  const ImgCat = state.source.category[catId].acf.categorie_images.url;
  return (
    <Flex
      width="100%"
       height="100vh"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      {...rest}
    >
      <Box
        position="relative"
        overflow="hidden"
        bg="#fff"
        width="92%"
        // height="92%"
        boxShadow=" 0px 0px 16px -1px rgba(131, 134, 138, 0.42)"
        borderRadius="20px"
        maxW="1060px"
        maxH="1000px"

      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
          padding="80px"
        >
          <Box height="430px" maxW="430px">
            <Image width="100%" height="100%" src={ImgCat} />
          </Box>

          <Flex flexDir="column" alignItems="center">
            <Heading width="90%" textAlign="center">
              briefstory est disponible sur mobile
            </Heading>
            <Text
              width="40%"
              padding="2em 0"
              fontSize="lg"
              textAlign="center"
              lineHeight="18px"
              color="rgba(51, 52, 78, 0.62)"
            >
              Accèdez à la story en flashant le QR code ci-dessous
            </Text>
            <Box>
              <QRCodeCanvas value={postLink} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default connect(PostDesktop);
