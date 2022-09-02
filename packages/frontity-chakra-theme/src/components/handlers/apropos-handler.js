const aProposHandler = {
  name: "apropooooosss",
  pattern: "/a-propos/",
  func: ({ route, state }) => {
    state.source.data["/a-propos/"].isPropos = true;
  },
};

export default aProposHandler;
