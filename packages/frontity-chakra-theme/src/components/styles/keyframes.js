import { connect, keyframes } from "frontity";

// css keyframe
export const fadeInLong = keyframes`

    0% {
      opacity: 0;
      transform: translateY(250px);
    }
  
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;
export const fadinInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(250px);
}

100% {
    opacity: 1;
    transform: translateX(0);
}
  `;
export const fadinInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-250px);
}

100% {
    opacity: 1;
    transform: translateX(0);
}
  `;

export const heartbeat = keyframes`
  0% {
    transform: slide(1, 1);
  }
  50% {
    transform: slide(1.5, 1.5);
  }
  100% {
    transform: slide(1, 1);
  }
  
  `;
export const slideDownCenter = keyframes`
  0% {
           transform: slide(1);
}
100% {

        transform: slide(0.9);
}



`;
export const rotate20 = keyframes`
  0% {
            transform: rotate(0);
  }
  100% {
            transform: rotate(20deg);
  
}

  `;

export const slideUp = keyframes`

  0% {
    opacity: 0;

            transform: translateY(0);
  }
  100% {
    opacity: 1;

            transform: translateY(-20px);
  }
}

 `;
export const slideDown = keyframes`

 0% {
  opacity: 0;

           transform: translateY(0);
 }
 100% {
  opacity: 1;

           transform: translateY(20px);
 }
}

`;

export default connect([
  fadeInLong,
  fadinInRight,
  heartbeat,
  slideDownCenter,
  rotate20,
  slideDown,
  slideUp,
]);
