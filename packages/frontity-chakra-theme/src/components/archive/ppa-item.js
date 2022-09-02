import { connect } from "frontity";
import React from "react";
import { formatPostData } from "../helpers";
import PostPreviewAuth from "./post-preview-author";
const PpaItem = ({ state, item }) => {
  const data = formatPostData(state, item);
  return <PostPreviewAuth data={data} /> ;
};

export default connect(PpaItem);
