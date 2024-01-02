function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
// locoScroll();


var index1 = gsap.timeline();
index1
    .from("header a, i", {
        y: -40,
        stagger: .5,
        duration: 1,
    })
    .from(".cnt1 h3", {
        delay: -3,
        opacity: 0,
        scale: .7,
    })
    .to(".belem1 h1", {
        delay: -2.5,
        y: 0,
        duration: .6,
        stagger: .2,
        // scrollTrigger: {
        //     trigger: "#pg1",
        //     scroller: "body,",
        //     scrub:2,
        //     start:"top 100%",
        //     end:"top 80%"
        // }
    })

var index2 = gsap.timeline();
index2
    .from("#pg2 h1", {
        opacity: 0,
        scale: .7,
        scrollTrigger: {
            trigger: "#pg2",
            scroller: "body",
            scrub: 2,
            start: "top 100%",
            end: "top 30%"
        }
    })
    .from("#featured .box", {
        opacity: .1,
        scale: 0,
        stagger: .2,
        delay:2,
        ease: Power3,
        scrollTrigger: {
            trigger: "#pg2",
            scroller: "body",
            scrub: 3,
            start: "top 100%",
            end: "bottom 50%"
        }
    })

















// intro
var intro = gsap.timeline();
intro
    .to("#intro #left", {
        scrollTrigger: {
            scroller: "body",
            trigger: "#left",
            start: "top 18%",
            pin: true,
        }
    })
    // .from("#titles h4 #introtitles1", {
    //     display: "inline-block",
    //     delay: -1,
    //     scrollTrigger: {
    //         trigger: "#right",
    //         scroller: "body",
    //         start: "top 100%",
    //         markers: true,
    //         end: "bottom -100%",
    //         scrub: 1,
    //     }
    // })
    // .from("#titles h4 #introtitles2", {
    //     display: "inline-block",
    //     delay: -1,
    //     scrollTrigger: {
    //         trigger: "#right",
    //         scroller: "body",
    //         start: "top 80%",
    //         end: "top 60%",
    //         markers: true,
    //         scrub: 1,
    //     }
    // })


















let vid = document.querySelector(".cnt3");
let icon3 = document.querySelector("#icon3");
// let cursorh3 = document.querySelector(".cursorh3");
// let pg3 = document.querySelector("#pg3");
let left3 = document.querySelector(".left3");
// let cursor = document.querySelector(".cursor");

// pg3.addEventListener("mouseenter", function () {
//     gsap.to(cursor, {
//         scale: 15,
//     })
//     cursor.style.mixBlendMode = "normal";
//     cursorh3.style.display = "block";
// })

// pg3.addEventListener("mouseleave", function () {
//     gsap.to(cursor, {
//         scale: 1
//     })
//     cursor.style.mixBlendMode = "diffrence";
//     cursorh3.style.display = "none";
// })

vid.addEventListener("click", function () {
    gsap.to(left3, {
        x: "0%"
    })
})

icon3.addEventListener("click", function () {
    gsap.to(left3, {
        x: "-100%"
    })
})








// contact
// let option = document.querySelector("#option");
// option.addEventListener("click", function () {
//     console.log("shjxbsx");
//     option.style.backgroundColor = "#fff";
// })























