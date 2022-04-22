"use strict";

gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray(".section");
getTotalWidth = function getTotalWidth() {
  var width = 0;
  sections.forEach(function (el) {
    return width += el.offsetWidth;
  });
  return width;
}, gsap.to(sections, {
  x: function x() {
    return -getTotalWidth();
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 1,
    end: "+=5500"
  }
});