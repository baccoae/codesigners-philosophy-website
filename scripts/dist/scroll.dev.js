"use strict";

gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray(".section");

getTotalWidth = function getTotalWidth() {
  var width = 0;
  sections.forEach(function (el) {
    return width += el.offsetWidth + 100;
  });
  return width;
};

var tween = gsap.to(sections, {
  x: function x() {
    return -getTotalWidth();
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: true,
    scrub: 1,
    end: "+=7500"
  }
});
var light = document.querySelector('.light-circle');
var startPin = document.querySelector('.light-intro');
gsap.to(".light-circle", {
  scrollTrigger: {
    horizontal: true,
    trigger: startPin,
    containerAnimation: tween,
    start: "left center",
    end: "left 400px",
    pin: true,
    scrub: true,
    markers: true
  },
  scale: 70,
  x: 500,
  duration: 3
});