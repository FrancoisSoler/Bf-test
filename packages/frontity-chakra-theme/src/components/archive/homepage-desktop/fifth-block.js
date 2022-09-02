import { Box, Flex } from "@chakra-ui/react";
import { connect, css } from "frontity";
import React from "react";
import Iframe from "react-iframe";
const FifthBlock = () => {
  return (
    <Box width="100%" height="54em">
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <Flex
          width={{ md: "90%", lg: "1060px" }}
          height={{ md: "60%", lg: "80%" }}
          bg="rgba(245, 221, 204, 0.48)"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          borderRadius="2em"
          padding={{ md: "90px", lg: "0 20px 60px 20px" }}
          boxShadow=" 0px 0px 16px -1px rgba(131, 134, 138, 0.42);"
        >
          {/*           <Box margin="0 auto" width="35%" pb={{ md: "1em", lg: "2em" }}>
            <Image src={images.propos} width="100%" />
          </Box> */}
          <Box
            width="100%"
            height="100%"
            css={css`
              &:nth-of-type(1) > * {
                margin: 0 auto;
              }
            `}
          >
            <Iframe
              width="80%"
              height="100%"
              scrollable="no"
              frameborder="0"
              src="https://briefstory.staging.tempurl.host/?mailpoet_form_iframe=7"
              class="mailpoet_form_iframe"
              id="mailpoet_form_iframe"
              vspace="0"
              tabindex="0"
              onload="var _this = this; window.addEventListener('message', function(e) {if(e.data.MailPoetIframeHeight){_this.style.height = e.data.MailPoetIframeHeight;}})"
              allowtransparency="true"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default connect(FifthBlock);
