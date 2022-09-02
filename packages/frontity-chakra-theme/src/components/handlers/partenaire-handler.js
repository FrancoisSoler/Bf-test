const partenaireHandler = {
    name: "devenezPartenaire",
    pattern: "/devenez-partenaire/",
    func: ({ route, state }) => {
      state.source.data["/devenez-partenaire/"].isPartenaire = true;
    },
  };
  
  export default partenaireHandler;
  