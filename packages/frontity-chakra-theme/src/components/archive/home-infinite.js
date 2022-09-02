import { usePostTypeInfiniteScroll } from "@frontity/hooks";
import { connect, styled, css } from "frontity";
import React, { useEffect, useState, useRef } from "react";
import Loading from "../loading";

import { Box } from "@chakra-ui/react";
import ArchiveItem from "./archive-item";

const PageList = ({ actions, state }) => {
  const { posts, isLimit, isFetching, isError, fetchNext } =
    usePostTypeInfiniteScroll({ limit: 3 });

  return (
    <Box className="baaaaaaaaaaaaaaaaaaaaa" display="inline-block">
      {posts.map(({ key, link, isLast, Wrapper,type,id }) => {
        const item = state.source[type][id];

        <Wrapper key={key}>
          <ArchiveItem
            link={link}
            posts={posts}
            isLast={isLast}
            key={item.id}
            item={item}
          />
          {!isLast && <hr />}
        </Wrapper>;
      })}
      <Container>
        {isFetching && <Loading />}
        {(isLimit || isError) && (
          <Button onClick={fetchNext}>
            {isError ? "Something failed - Retry" : "Charger plus"}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default connect(PageList);

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  color: #33344e;
  padding: 12px;
  font-weight: bold;
  font-family: OpenSans;
  border: 2px solid #fff;
  border-radius: 5px;
`;
