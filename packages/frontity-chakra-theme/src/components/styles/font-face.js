import React from "react";
import { Global, css } from "frontity";
import Catamaran from "../../fonts/Catamaran-Regular.ttf";
import CatamaranBold from "../../fonts/Catamaran-Bold.ttf";
import Lora from "../../fonts/Lora-Regular.ttf";
import LoraBold from "../../fonts/Lora-Bold.ttf";
import OpenSans from "../../fonts/OpenSans-Regular.ttf";
import OpenSansBold from "../../fonts/OpenSans-Bold.ttf";
import OpenSansBoldItalic from "../../fonts/OpenSans-BoldItalic.ttf";

import LatoBold from "../../fonts/Lato-Bold.ttf";
import Lato from "../../fonts/Lato-Regular.ttf";
import Poppins from "../../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../../fonts/Poppins-Bold.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Catamaran";
        src: url(${Catamaran});
        font-display: swap;
      }
      @font-face {
        font-family: "CatamaranBold";
        src: url(${CatamaranBold});
        font-display: swap;
      }
      @font-face {
        font-family: "Lora";
        src: url(${Lora});
        font-display: swap;
      }

      @font-face {
        font-family: "LoraBold";
        src: url(${LoraBold});
        font-display: swap;
      }
      @font-face {
        font-family: "OpenSans";
        src: url(${OpenSans});
        font-display: swap;
      }
      @font-face {
        font-family: "OpenSansBold";
        src: url(${OpenSansBold});
        font-display: swap;
      }
      @font-face {
        font-family: "OpenSansBoldItalic";
        src: url(${OpenSansBoldItalic});
        font-display: swap;
      }
      @font-face {
        font-family: "Lato";
        src: url(${Lato});
        font-display: swap;
      }
      @font-face {
        font-family: "LatoBold";
        src: url(${LatoBold});
        font-display: swap;
      }
      @font-face {
        font-family: "Poppins";
        src: url(${Poppins});
        font-display: swap;
      }
      @font-face {
        font-family: "PoppinsBold";
        src: url(${PoppinsBold});
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
