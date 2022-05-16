gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let organisation1 = document.getElementById('one')
let organisation2 = document.getElementById('two')
let organisation3 = document.getElementById('three')
let organisation4 = document.getElementById('four')
let organisation5 = document.getElementById('five')

organisation1.addEventListener("click", (e) => {
    if (organisation1.classList.contains("inactive")) {
        gsap.to(organisation1.children[1], {
            height: "400px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation2, organisation3, organisation4, organisation5], {
            opacity: 0
        })

        organisation1.classList.remove("inactive")
        organisation1.classList.add("active")
    }

    else if (organisation1.classList.contains("active")) {
        gsap.to(organisation1.children[1], {
            height: "0px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation2, organisation3, organisation4, organisation5], {
            opacity: 1,
            delay: 0.4
        })

        organisation1.classList.add("inactive")
        organisation1.classList.remove("active")
    }
})

organisation2.addEventListener("click", (e) => {
    if (organisation2.classList.contains("inactive")) {
        gsap.to(organisation2, {
            y: -114,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation2.children[1], {
            height: "400px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation3, organisation4, organisation5], {
            opacity: 0
        })

        organisation2.classList.remove("inactive")
        organisation2.classList.add("active")
    }

    else if (organisation2.classList.contains("active")) {
        gsap.to(organisation2, {
            y: 0,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation2.children[1], {
            height: "0px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation3, organisation4, organisation5], {
            opacity: 1,
            delay: 0.4
        })

        organisation2.classList.add("inactive")
        organisation2.classList.remove("active")
    }
})

organisation3.addEventListener("click", (e) => {
    if (organisation3.classList.contains("inactive")) {
        gsap.to(organisation3, {
            y: -227,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation3.children[1], {
            height: "400px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation4, organisation5], {
            opacity: 0
        })

        organisation3.classList.remove("inactive")
        organisation3.classList.add("active")
    }

    else if (organisation3.classList.contains("active")) {
        gsap.to(organisation3, {
            y: 0,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation3.children[1], {
            height: "0px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation4, organisation5], {
            opacity: 1,
            delay: 0.4
        })

        organisation3.classList.add("inactive")
        organisation3.classList.remove("active")
    }
})

organisation4.addEventListener("click", (e) => {
    if (organisation4.classList.contains("inactive")) {
        gsap.to(organisation4, {
            y: -341,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation4.children[1], {
            height: "400px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation3, organisation5], {
            opacity: 0
        })

        organisation4.classList.remove("inactive")
        organisation4.classList.add("active")
    }

    else if (organisation4.classList.contains("active")) {
        gsap.to(organisation4, {
            y: 0,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation4.children[1], {
            height: "0px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation3, organisation5], {
            opacity: 1,
            delay: 0.4
        })

        organisation4.classList.add("inactive")
        organisation4.classList.remove("active")
    }
})

organisation5.addEventListener("click", (e) => {
    if (organisation5.classList.contains("inactive")) {
        gsap.to(organisation5, {
            y: -455,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation5.children[1], {
            height: "400px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation3, organisation4], {
            opacity: 0
        })

        organisation5.classList.remove("inactive")
        organisation5.classList.add("active")
    }

    else if (organisation5.classList.contains("active")) {
        gsap.to(organisation5, {
            y: 0,
            duration: 0.8,
            ease: Power4.easeInOut
        })

        gsap.to(organisation5.children[1], {
            height: "0px",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.to([organisation1, organisation2, organisation3, organisation4], {
            opacity: 1,
            delay: 0.4
        })

        organisation5.classList.add("inactive")
        organisation5.classList.remove("active")
    }
})

let burger = document.querySelector(".nav-container")
let navOverlay = document.querySelector('.nav-overlay')
let navLink = document.getElementsByClassName('link-title')
let menuState = "closed"

burger.addEventListener("click", () => {
    if (menuState == "closed") {
        gsap.to(navOverlay, {
            height: "100vh",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.from(navLink, {
            y: 200,
            duration: 1,
            stagger: 0.1
        })

        menuState = "opened"
    }

    else if (menuState == "opened") {
        gsap.to(navOverlay, {
            height: "0vh",
            duration: 1,
            ease: Power4.easeInOut
        })

        gsap.from(navLink, {
            y: 0,
            duration: 1,
            stagger: 0.1
        })

        menuState = "closed"
    }

})

let main = document.querySelector(".main")
let link = document.querySelector('.return-text')

link.addEventListener("click", (e) => {
    e.preventDefault()
    let restartTarget = link.getAttribute("href")
    let homePos = document.querySelector(restartTarget).offsetLeft
    gsap.to(window, {
        scrollTo: (homePos),
        duration: 1.5,
        ease: Power4.easeInOut
    })
})


let sec1 = document.querySelector("#section1")
let sec1Link = document.querySelector('.nav-sec1')

sec1Link.addEventListener("click", (e) => {
    e.preventDefault()
    let sec1Target = sec1Link.getAttribute("href")
    let sec1pos = document.querySelector(sec1Target).offsetLeft - (document.querySelector(sec1Target).offsetLeft / 2)
    gsap.to(window, {
        scrollTo: (sec1pos),
        duration: 1.5,
        ease: Power4.easeInOut
    })

    gsap.to(navOverlay, {
        height: "0vh",
        duration: 1,
        ease: Power4.easeInOut
    })

    gsap.from(navLink, {
        y: 0,
        duration: 1,
        stagger: 0.1
    })
    menuState = "closed"
})

let sec2 = document.querySelector("#section2")
let sec2Link = document.querySelector('.nav-sec2')

sec2Link.addEventListener("click", (e) => {
    e.preventDefault()
    let sec2Target = sec2Link.getAttribute("href")
    let sec2pos = document.querySelector(sec2Target).offsetLeft - 5460
    gsap.to(window, {
        scrollTo: (sec2pos),
        duration: 1.5,
        ease: Power4.easeInOut
    })

    gsap.to(navOverlay, {
        height: "0vh",
        duration: 1,
        ease: Power4.easeInOut
    })

    gsap.from(navLink, {
        y: 0,
        duration: 1,
        stagger: 0.1
    })

    menuState = "closed"
})

let sec3 = document.querySelector("#section3")
let sec3Link = document.querySelector('.nav-sec3')

sec3Link.addEventListener("click", (e) => {
    e.preventDefault()
    let sec3Target = sec3Link.getAttribute("href")
    let sec3pos = document.querySelector(sec3Target).offsetLeft - 11260
    gsap.to(window, {
        scrollTo: (sec3pos),
        duration: 1.5,
        ease: Power4.easeInOut
    })

    gsap.to(navOverlay, {
        height: "0vh",
        duration: 1,
        ease: Power4.easeInOut
    })

    gsap.from(navLink, {
        y: 0,
        duration: 1,
        stagger: 0.1
    })

    menuState = "closed"
})

let sec4 = document.querySelector("#section4")
let sec4Link = document.querySelector('.nav-sec4')

sec4Link.addEventListener("click", (e) => {
    e.preventDefault()
    let sec4Target = sec4Link.getAttribute("href")
    let sec4pos = document.querySelector(sec4Target).offsetLeft - 18485
    gsap.to(window, {
        scrollTo: (sec4pos),
        duration: 1.5,
        ease: Power4.easeInOut
    })

    gsap.to(navOverlay, {
        height: "0vh",
        duration: 1,
        ease: Power4.easeInOut
    })

    gsap.from(navLink, {
        y: 0,
        duration: 1,
        stagger: 0.1
    })

    menuState = "closed"
})

let sec5 = document.querySelector("#section5")
let sec5Link = document.querySelector('.nav-sec5')

sec5Link.addEventListener("click", (e) => {
    e.preventDefault()
    let sec5Target = sec5Link.getAttribute("href")
    let sec5pos = document.querySelector(sec5Target).offsetLeft - 22720
    gsap.to(window, {
        scrollTo: (sec5pos),
        duration: 1.5,
        ease: Power4.easeInOut
    })

    gsap.to(navOverlay, {
        height: "0vh",
        duration: 1,
        ease: Power4.easeInOut
    })

    gsap.from(navLink, {
        y: 0,
        duration: 1,
        stagger: 0.1
    })

    menuState = "closed"
})

console.log(sec2.offsetLeft);