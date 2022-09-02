import React, {useEffect} from "react";
import { Box } from "@chakra-ui/react";
import { decode } from "frontity";
import { Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PostAd = ({ isSponso, bgColor, postData }) => {
  //console.log("postdata acf", postData.acf);
  const controls = useAnimation();
  const [refViewAd, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      style={{ width: "100%", display: "contents" }}
      initial="hidden"
      animate={controls}
      ref={refViewAd}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Flex
      //h="200px"
        //padding={isSponso ? "1em 0 0 0 " : "0"}
        justifyContent="center"
        width="100%"
        bg={bgColor}
        p="2em 0 2.5em 0 "
        dangerouslySetInnerHTML={{
          __html: decode(postData.acf.sponsor_iframe),
        }}
      />
    </motion.div>
  );
};

export default PostAd;
