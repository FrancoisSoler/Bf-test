const authorHandler = {
  name: "authorBio",
  priority: 1,
  pattern: "/author/:id/:user",
  //fetch data for author page
  func: async ({ state, link, params, libraries,type }) => {
    // first need convert object to int
    let id = parseInt(params.id);
    // get related post for author
    const post = await libraries.source.api.get({
      endpoint: "posts",
      params: {
        per_page: 50,
        author: id,
      },
    });
    // add it to the state
    const posts = await post.json();
    state.source.data[link].isPostA = true;

    state.source.data.postA = posts;

    const response = await libraries.source.api.get({
      endpoint: "users",
      params: { slug: params.user },
    });
    //get author info and add it to the state
    const data = await response.json();
    state.source.data[link].isAuthorBio = true;
    state.source.data[link].isPage = true;
    state.source[type] = post;
    state.source.data[link].author = data[0];
  },
};

export default authorHandler;
