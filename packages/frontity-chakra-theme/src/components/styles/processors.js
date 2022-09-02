import React from "react";
import { Alert, Text, Box, Heading } from "@chakra-ui/react";
import Link from "../link";
import { css } from "frontity";

/**
 *
 * @param {React.ElementType} tag
 * @param {{props: (nodeProps: Object) => Object, component: React.ComponentType<any>}} options
 */
function makeProcessor(tag, options) {
  return {
    name: tag,
    test: ({ node }) => node.component === tag,
    processor: ({ node }) => {
      node.component = options.component || node.tag;
      node.props = { ...options.props({ node }), ...node.props };
      return node;
    },
    // allow for overriding this processors
    priority: 20,
  };
}

const blockquote = makeProcessor("blockquote", {
  props: () => ({
    variant: "left-accent",
    status: "warning",
    marginY: "20px",
  }),
  component: Alert,
});

const paragraph = makeProcessor("p", {
  props: ({ node }) => {
    // we don't want to add marginTop if the paragraph is nested in another component
    const hasParent = Boolean(node.parent);
    return {
      marginTop: hasParent ? "0" : "10px",
      fontSize: { base: "md", md: "lg" },
      lineHeight: "tall",
    };
  },
  component: Text,
});

const figcaption = makeProcessor("figcaption", {
  props: () => ({
    as: "figcaption",
    fontSize: "1rem",
    marginTop: "20px",
    textAlign: "center",
    opacity: 0.8,
    marginBottom: "40px",
  }),
  component: Box,
});

// make for h1, h2, h4, h5, h6
const h3 = makeProcessor("h3", {
  props: () => ({
    as: "h3",
    marginTop: "25px",
    fontSize: { base: "lg", md: "xl" },
    fontFamily: "CatamaranBold",
    fontWeight: "600",
    lineHeight: "24px",
    marginBottom: "1.2em",
  }),
  component: Heading,
});

const PostLink = ({ children, href, rel, ...props }) => (
  <Box
    display="inline-flex"
    {...props}
    className="postLinkHover"
    
    css={css`
      position: relative;
      overflow: hidden;
      text-decoration: none;
      z-index: 1;
      //word-break: break-all;

      &::after {
        content: "";
        //background: #f0f;
        position: absolute;
        left: 12px;
        bottom: -6px;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        z-index: -10;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      }
      &:hover:after {
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 100%;
      }
    `}
  >
    <Link rel={rel} link={href}>
      {children}
    </Link>
  </Box>
);

const a = makeProcessor("a", {
  props: ({ node }) => node.props,
  component: PostLink,
});

const processors = [blockquote, paragraph, figcaption, h3, a];
export default processors;
