const EntrepriseHandler = {
  name: "EntrepriseMeta",
  priority: 5,
  pattern: "/?meta_key=nom_enteprise",

  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    console.log("entreprise", route);
    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "posts",
      params: {
        _embed: true,
        per_page: 20, // To make sure you get all of them
        meta_key: "/?meta_key=nom_enteprise"
      },
    });
    console.log("entrepriseresponse", response);

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items,
    });
  },
};

export default EntrepriseHandler;
