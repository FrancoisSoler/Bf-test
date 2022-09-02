import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { images } from "../../constants";

const SecondBlock = ({ state, libraries }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const { scrollYProgress } = useViewportScroll();
  const moveLeft = useTransform(scrollYProgress, [0, 1.2], ["20%", "80%"]);
  const moveRight = useTransform(scrollYProgress, [0, 1.2], ["-30%", "-100%"]);

  return (
    <Flex height="50em" mt="5em" justifyContent="center" alignItems="center">
      <Flex
        width="80%"
        justifyContent={{ md: "space-between", lg: "center" }}
        alignItems="center"
      >
        <motion.div
          style={{ translateX: moveLeft }}
          transition={{ type: "spring", stiffness: 150, mass: 0.5 }}
        >
          <Image
            src="https://briefstory.staging.tempurl.host/wp-content/uploads/2020/06/HP.png"
            alt="Briefstory on phone"
            width="32%"
          />
        </motion.div>

        <motion.Flex
          style={{ translateX: moveRight, height: "30%", width: "54%" }}
          flexDirection="column"
          transition={{ type: "spring", stiffness: 150, mass: 0.5 }}
        >
          <Heading pt="1em"> Disponible sur mobile</Heading>
          <Text
            pt=".5em"
            color="#858A96"
            fontFamily="OpenSans"
            lineHeight="34px"
            fontSize="lg"
          >
            briefstory est pour le moment exclusivement dédié à un usage mobile.
            Pour y accéder il suffit de flasher le QR code ci-dessous. Vos
            retours sont bienvenus et précieux. Merci et bonnes découvertes 😉
          </Text>
          <Box pt="2em">
            <Image
              src="https://briefstory.staging.tempurl.host/wp-content/uploads/2020/04/QR-code-BS.png"
              alt="Briefstory qrcode"
              borderRadius="20px"
              width="30%"
              boxShadow=" 0px 0px 43px 1px rgba(131, 134, 138, 0.2)"
              border="1px solid rgba(245, 221, 204, 0.48)"
            />
          </Box>
        </motion.Flex>
      </Flex>
    </Flex>
  );
};

export default connect(SecondBlock);
