import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiesBar = ({}) => {
  return (
    <CookieConsent
      debug={false}
      location="bottom"
      buttonText="J'accepte"
      cookieName="agreed"
      sameSite="strict"
      style={{
        background: "#faefe7",
        color: "#32334d",
        opacity: ".9",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "11px",
        padding: "10px 0 0 0"
      }}
      contentStyle={{
        flex:"unset", 
      }}
      buttonStyle={{
        opacity: "1",
        background: "#fbac62",
        color: "#fff",
        fontSize: "13px",
        marginleft: "auto",
        borderRadius: "5px"
      }}
      expires={150}
    >
      Nous utilisons des cookies pour améliorer l'expérience utilisateur et
      analyser le trafic du site.
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};
export default CookiesBar;
