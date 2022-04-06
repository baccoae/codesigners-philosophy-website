"use strict";

gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray(".section");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 1,
    end: "+=5500"
  }
});