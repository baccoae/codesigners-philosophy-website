gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".section");

getTotalWidth = () => {
    let width = 0;
    sections.forEach(el => width += el.offsetWidth);
    return width;
},

    gsap.to(sections, {
        x: () => -getTotalWidth(),
        ease: "none",
        scrollTrigger: {
            trigger: ".main",
            pin: true,
            scrub: 1,
            end: "+=7500",
        }
    });