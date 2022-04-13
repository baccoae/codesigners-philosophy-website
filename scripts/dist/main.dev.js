"use strict";

window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY; // console.log(scrollPos);
});
var btnTest = document.querySelector(".test-btn");
btnTest.addEventListener("click", function () {
  console.log("ok");
  gsap.to(sections, {
    xPercent: "-200"
  });
});