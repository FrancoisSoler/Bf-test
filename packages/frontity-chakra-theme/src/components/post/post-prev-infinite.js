import { Box, Image, Flex } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React, { useEffect } from "react";
import { motion, onViewportLeave, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line
const PrevInfinte = ({
  nextImgArray,
  state,
  actions,
  libraries,
  bgColorArticle,
  id,
  isSponso,
  ...props
}) => {
  const nextImg = nextImgArray.slice(-1)[0];
  const nextPostId = state.source.data[nextImg].id;
  const postImgPrev = state.source.post[nextPostId].featured_image_src;

  const controls = useAnimation();
  const [refView, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //console.log("postprev", nextImg);
  return (
    <Flex
      width="100%"
      bg={bgColorArticle}
      {...props}
      h="80%"
      justifyContent="center"
      //alignItems="flex-end"

      //pt="5em"
    >
      <motion.div
        style={{ width: "100%"}}
        initial="hidden"
        animate={controls}
        ref={refView}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Image
          // transform={isSponso ? "none " : "translateY(120px)"}
          //transform="translateY(100px)"
          objectFit="cover"
          filter=" opacity(69%)"
          width="100%"
          h="80%"
          // display="flex"
          objectPosition="top"
          borderRadius="10px"
          src={postImgPrev}
        />
      </motion.div>
    </Flex>
  );
};

export default connect(PrevInfinte);
