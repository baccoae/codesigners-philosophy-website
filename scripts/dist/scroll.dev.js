"use strict";

gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  var sections = gsap.utils.toArray(".section"); // let test = document.querySelector(".main")

  getTotalWidth = function getTotalWidth() {
    var width = 0;
    sections.forEach(function (el) {
      return width += el.offsetWidth;
    });
    return width;
  };

  var tween = gsap.to(sections, {
    x: function x() {
      return -getTotalWidth() + 1150;
    },
    ease: "none",
    scrollTrigger: {
      trigger: ".main",
      pin: true,
      scrub: 1.3,
      end: "+=7500"
    }
  });
  var light = document.querySelector('.light-circle');
  var startPin = document.querySelector('.light-intro');
  gsap.to(".light-circle", {
    scrollTrigger: {
      horizontal: true,
      trigger: light,
      containerAnimation: tween,
      start: "left center",
      end: "left 500px",
      // pin: true,
      scrub: true
    },
    scale: 80,
    x: 400,
    duration: 3
  });
  gsap.to(".light-intro", {
    scrollTrigger: {
      horizontal: true,
      trigger: startPin,
      containerAnimation: tween,
      start: "left center",
      end: "left 400px",
      // pin: true,
      scrub: true
    },
    y: -40,
    opacity: 0,
    duration: 1
  });
  gsap.to(".light-outro", {
    scrollTrigger: {
      horizontal: true,
      trigger: startPin,
      containerAnimation: tween,
      start: "left center-=400px",
      end: "left 200px",
      // pin: true,
      scrub: true
    },
    y: -40,
    opacity: 1,
    duration: 1
  });
};