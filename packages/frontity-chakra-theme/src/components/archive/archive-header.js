import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CatCallToAction from "./cat-cta";
const ArchiveHeader = ({
  postData,
  state,
  taxonomy,
  title,
  data,
  ...props
}) => {
  const dataLink = state.source.get(state.router.link);
  const isCategoryId = dataLink.isCategory;

  const [textTag, setTags] = useState();
    const catSlug = state.source.category[data.id].slug;
  const boolPage = "/category/"+catSlug+"/"
  const isPageCat = data.link == boolPage 
   const notShow =  data.next !== data.link

/*   const [LinkUrlState, setState] = useState(data.link); */

  useEffect(() => {
    const textTag = JSON.parse(localStorage.getItem("textTag"));
    if (textTag) {
      setTags(textTag);
    }
  }, []);
  return <Box bg="#faefe7">{isPageCat && isCategoryId == true && <CatCallToAction isPageCat={notShow} /* showCat={showCat} */ />}</Box>;
};

export default ArchiveHeader;
