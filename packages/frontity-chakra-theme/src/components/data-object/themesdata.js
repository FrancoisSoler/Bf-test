import { images } from "../constants";

export const themeData = {
    a: {
      img: images.inspiration,
      bg: "#faefe7",
      title: "Inspiration · curation",
      text: "Des histoires inspirantes pour les professionnels et les curieux du numérique ",
      url:"/category/inspiration-curation/",
      value:"S'inspirer",
      hoverBtn: "#f5ddcc"
    },
    b: {
      img: images.tech,
      bg: "#d0e0fd",
      title: "Tech · innovation",
      text: "Exploration du monde d'après et de toutes les innovations inspirantes pour le futur",
      url:"/category/tech-innovation/",
      transform: "translateY(7%)",
      value:"Explorer",
      hoverBtn:"#AAC6FC"
    },
    c: {
      img: images.media,
      bg: "#e9cbf3",
      title: "Médias · contenus",
      text: "Tout ce qui relève des médias, de l'entertainment et du marketing digital",
      url:'/category/medias-contenus/',
      value:"S'informer",
      hoverBtn:"rgba(155, 95, 175, 0.93)"
    },
    d: {
      img: images.societe,
      bg: "#b1e2b6",
      title: "Société · impact",
      text: "L'actualité des projets et initiatives qui ont un impact positif",
      url:'/category/societe-impact/',
      value:"S'engager",
      transform: "translateY(7%)",
      hoverBtn:"rgba(42, 184, 56, 0.53);"
    },
  };