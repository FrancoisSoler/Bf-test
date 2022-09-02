import React from "react";
import { styled, connect } from "frontity";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

const SharingButtons = ({ state, link, title, excerpt }) => {
  const url = state.frontity.url;
  //const excerpt = state.source.post.excerpt

  return (
    <SharingButton>
      {/* Whatsapp */}
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?text=${excerpt}${link}&title${title}`}
      >
        <FaWhatsapp size="1.2em"></FaWhatsapp>
      </a>

      {/* Twitter */}
      <a
        target="_blank"
        href={`http://twitter.com/share?text=${title}&url=${excerpt}${link}`}
      >
        <FaTwitter size="1.2em"></FaTwitter>
      </a>
      {/* linkedin */}
      <a
        target="_blank"
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}${link}&title=${title}&source=${url}${link}`}
      >
        <FaLinkedin size="1.2em"></FaLinkedin>
      </a>
      {/* FB */}
      <a
        target="_blank"
        href={`http://www.facebook.com/share.php?u=${url}${link}&title=${title}`}
      >
        <FaFacebook size="1.2em"></FaFacebook>
      </a>

      {/* telegram */}
      <a
        target="_blank"
        href={`https://t.me/share/url?url=${url}${link}&title=${title}&text${excerpt}`}
      >
        <FaTelegram size="1.2em"></FaTelegram>
      </a>

      {/* Mail */}
      <a
        target="_blank"
        href={`mailto:chose@bidule.fr?subject=${link}&title=${title}&text${excerpt}`}
      >
        <FaEnvelope size="1.2em"></FaEnvelope>
      </a>
    </SharingButton>
  );
};

export default connect(SharingButtons);

const SharingButton = styled.div`
width: 0%;
display:flex;
justify-content: space-evenly;

  a {
   
    display: inline-block;
    margin: 0px 10px;
  }

  @media (max-width: 576px) {
    padding: 10px 0px;
  }
`;
