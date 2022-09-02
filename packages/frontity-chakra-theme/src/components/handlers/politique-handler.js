const politiqueHandler = {
    name: "politique de confidentialité",
    pattern: "/politique-confidentialite/",
    func: ({ route, state }) => {
      console.log('politique handler pass')
      state.source.data["/politique-confidentialite/"].isPolitique = true;
    },
  };
  
  export default politiqueHandler;