const settings = {
  name: "briefstory-frontity",
  state: {
    frontity: {
      url: "https://briefstory.staging.tempurl.host/",
      logo: "Briefstory",
      title: "Briefstory",
      description: "Briefstory on Frontity",
    },
  },
  
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          socialLinks: [
            ["twitter", "https://twitter.com/briefstory"],
            ["facebook", "https://www.facebook.com/briefstory.io/"],
            ["linkedin", " https://www.linkedin.com/company/briefstory/"],
            ["instagram", "https://www.instagram.com/briefstory.io/"],
          ],
          menu: [

            [
              "A propos",
              "/a-propos/"
            ],
            [
              "Devenez partenaire",
              "/devenez-partenaire/"
            ],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          autoPrefetch: "in-view"
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://briefstory.staging.tempurl.host/",
          params: {
            per_page: 20,
            
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/yoast",
  ],
};

export default settings;
