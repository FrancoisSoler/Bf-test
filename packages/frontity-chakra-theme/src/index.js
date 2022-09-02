import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
import link from "@frontity/html2react/processors/link";
//import { theme } from "@chakra-ui/react";
import aProposHandler from "./components/handlers/apropos-handler"
import mentionHandler from "./components/handlers/mention-handler";
import authorHandler from "./components/handlers/author-handler";
import partenaireHandler from "./components/handlers/partenaire-handler";
import userHandler from "./components/handlers/users-handler";
import politiqueHandler from "./components/handlers/politique-handler";
import EntrepriseHandler from "./components/handlers/entreprise-handler";
const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme,
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {

      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      logo: "Briefstory",
      showBackgroundPattern: true,
      showSocialLinks: true,

      /*       socialLinks: [
        ["pinterest", "https://www.pinterest.com/frontity/"],
        ["facebook", "https://www.instagram.com/frontity/"],
        ["twitter", "https://www.twitter.com/frontity/"],
      ], */

      socialLinks: [],
      menu: [],
      featured: {
        showOnArchive: false,
        showOnPost: true,
      },

      colors: {
        primary: {
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#555f58",
          700: "##33344e",
          800: "#232924",
          900: "#272727",
        },
        accent: {
          50: "#ede4d3",
          100: "#fbe3b2",
          200: "#f6d086",
          300: "#f1be58",
          400: "#eca419",
          500: "#d49212",
          600: "#a5710b",
          700: "#775105",
          800: "#483100",
          900: "#1d0f00",
        },
        briefstory: {
          bg: "#f8efe8",
          button: "#faab64",
          gray: "#858a96",
          ecology: "#daf6dc",
          inspiration: "#faeee6",
          tech: "#dce7fe",
          media: "#dce7fe",
          menuIcon: "#f5ddcc",
          blueIcon: "#4e4b5f",
          yellow: "#fbac62",
          menu: "#f8efe8",
          bgrgba:"rgba(245, 221, 204, 0.48)"
        },
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      isPartenaireModalOpen: false,
      autoPreFetch: "all",
    },
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      beforeSSR: ({ actions }) => async () => {
        await actions.source.fetch("users");
        //await actions.source.fetch("/posts/?meta_key=nom_enteprise");

      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
      openPartenaireModal: ({ state }) => {
        state.theme.isPartenaireModalOpen = true;
      },
      closePartenaireModal: ({ state }) => {
        state.theme.isPartenaireModalOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    },
     source: {
      handlers: [aProposHandler,mentionHandler,/* authorHandler */,partenaireHandler,politiqueHandler, userHandler,EntrepriseHandler],
    }, 
  },
};

export default chakraTheme;
