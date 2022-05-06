gsap.registerPlugin(ScrollTrigger);

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