import { gsap } from 'gsap';

export const animatePage = (node: HTMLElement) => {
  gsap.fromTo(
    node, 
    { 
      opacity: 0,
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }
  );
};