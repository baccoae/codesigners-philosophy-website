gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".section");

getTotalWidth = () => {
    let width = 0;
    sections.forEach(el => width += el.offsetWidth + 100);
    return width;
}

let tween = gsap.to(sections, {
    x: () => -getTotalWidth(),
    ease: "none",
    scrollTrigger: {
        trigger: ".main",
        pin: true,
        scrub: 1,
        end: "+=7500",
    }
});


let light = document.querySelector('.light-circle')
let startPin = document.querySelector('.light-intro')

gsap.to(".light-circle", {
    scrollTrigger: {
        horizontal: true,
        trigger: startPin,
        containerAnimation: tween,
        start: "left center",
        end: "left 400px",
        pin: true,
        scrub: true,
        markers: true,
    },
    scale: 70,
    x: 500,
    duration: 3
})