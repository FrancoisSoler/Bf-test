const mentionHandler = {
  name: "mentionsL",
  pattern: "/mentions-legales/",
  func: ({ route, state }) => {
    state.source.data["/mentions-legales/"].isMention = true;
  },
};

export default mentionHandler;
