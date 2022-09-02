import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import CookiesBar from "./cookie-consent";
import MentionsLegales from "./pages/mentions-legales";
import AuthorPage from "./pages/author-page";
import Partenaire from "./pages/partenaire/partenaire";
import APropos from "./pages/a-propos/a-propos";
import PolitiqueConfidentialite from "./pages/politique-confidentialite";
import ArchivePage from "./archive/archive-page";
import PostList from "./post/post-list";
// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const overrides = extendTheme({
    fonts: {
      heading: "CatamaranBold,LoraBold, system-ui, Helvetica, sans-serif",
      body: "Lora ,OpenSans, Lato, system-ui, Helvetica, sans-serif",
    },
    colors: { ...state.theme.colors },
  });
  return (
      <ChakraProvider theme={{ ...overrides }}>
        <FontFace />
        {/* Add some metatags to the <head> of the HTML. */}
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="fr" />
        </Head>
        {/* Add the header of the site. */}
        <Header />
        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        <Box
          as="main"
          // mt={{ base: "40px", md: "70px" }}
          minH="calc(100vh - 320px)"
        >
          <CookiesBar></CookiesBar>

          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <APropos when={data.isPropos} />
            <MentionsLegales when={data.isMention} />
            <PolitiqueConfidentialite when={data.isPolitique}/>
            <Partenaire when={data.isPartenaire} />
            <AuthorPage when={data.isAuthorBio} />
            <Archive when={data.isArchive} />
            <PostList when={data.isPostType} />
            <Page404 when={data.is404} />
          </Switch>
        </Box>
        <Footer />
      </ChakraProvider>
    
  );
};

export default connect(Theme);
