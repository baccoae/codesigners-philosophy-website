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
        trigger: light,
        containerAnimation: tween,
        start: "left center",
        end: "left 500px",
        // pin: true,
        scrub: true,
    },
    scale: 55,
    x: 400,
    duration: 3
})

gsap.to(".light-intro", {
    scrollTrigger: {
        horizontal: true,
        trigger: startPin,
        containerAnimation: tween,
        start: "left center",
        end: "left 400px",
        // pin: true,
        scrub: true,
    },
    y: -40,
    opacity: 0,
    duration: 1
})

gsap.to(".light-outro", {
    scrollTrigger: {
        horizontal: true,
        trigger: startPin,
        containerAnimation: tween,
        start: "left center-=400px",
        end: "left 200px",
        // pin: true,
        scrub: true,
    },
    y: -40,
    opacity: 1,
    duration: 1
})