import { connect } from "frontity";
import React from "react";
import { formatPostData } from "../helpers";
import PostPreview from "./post-preview";
const ArchiveItem = ({ isAuthor,state, item }) => {
  const data = formatPostData(state, item);
  return <PostPreview isAuthor={isAuthor} data={data} /> ;
};

export default connect(ArchiveItem);
