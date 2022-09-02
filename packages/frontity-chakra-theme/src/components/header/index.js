import React from "react";
import { connect } from "frontity";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";
import { SearchButton, SearchModal, SearchForm } from "../search";
import ViewCount from "./view-count/view-count";
import AuthorHeader from "./author-header";
import CategoryHeader from "./cat-header";
import TaxonomyHeader from "./taxo-header"
const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  if (data.isPost) {
    return (
      <>
        <ViewCount />
      </>
    );
  }
  if (data.isAuthor && data.isArchive) {
    return (
      <>
        <AuthorHeader />
      </>
    );
  }
  if (data.isCategory && data.isArchive) {
    return (
      <>
        <CategoryHeader />
      </>
    );
  }  if (data.isTaxonomy && data.isArchive) {
    return (
      <>
        <TaxonomyHeader />
      </>
    );
  } else {
    return (
      <>
        <MainHeader>
          <Navigation menu={state.theme.menu} />
          {state.theme.showSocialLinks && (
            <SocialNav menu={state.theme.socialLinks} />
          )}
          <SearchButton onClick={actions.theme.openSearchModal} />
          <SearchModal
            isOpen={state.theme.isSearchModalOpen}
            onClose={actions.theme.closeSearchModal}
          >
            <SearchForm />
          </SearchModal>
        </MainHeader>
      </>
    );
  }
};

export default connect(Header);
