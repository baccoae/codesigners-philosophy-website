window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
})

let btnTest = document.querySelector(".test-btn");
btnTest.addEventListener("click", () => {
    console.log("ok");
    gsap.to(sections, {
        xPercent: "-200",
    })
})