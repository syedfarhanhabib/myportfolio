// cursor
let cursor = document.querySelector(".cursor");
let main = document.querySelector("main");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})

// main.addEventListener("mouseenter", function () {
//     gsap.to(cursor, {
//         scale: 1,
//     })
// })
// main.addEventListener("mouseleave", function () {
//     gsap.to(cursor, {
//         scale: 0,
//     })
// })


// magnet
// let magnet = document.querySelector(".magnet");
// magnet.addEventListener("mouseenter", function () {
//     console.log("hey");
//     gsap.to(cursor, {
//         scale: 12,
//     })
// })
// magnet.addEventListener("mouseleave", function () {
//     gsap.to(cursor, {
//         scale: 1,
//     })
// })


const magnet = document.querySelectorAll(".magnet");

magnet.forEach(magnet => {
    magnet.addEventListener("mouseover", function () {
        console.log("hey");
        gsap.to(cursor, {
            scale: 12,
        })
    });
    magnet.addEventListener("mouseout", function () {
        console.log("hey");
        gsap.to(cursor, {
            scale: 1,
        })
    });
});




// nav
let nav = document.querySelector("nav");
let icon = document.querySelector("#icon");
let box = document.querySelector(".box");
let flag = 0;

icon.addEventListener("click", function () {
    if (flag == 0) {
        icon.style.color = "var(--dark)"
        box.style.display = "block";
        gsap.to(nav, {
            x: "0%",
        })
        flag = 1;
    }
    else {
        icon.style.color = "var(--light)"
        box.style.display = "none";
        gsap.to(nav, {
            x: "100%",
        })
        flag = 0;
    }

})

box.addEventListener("click", function () {
    if (flag == 0) {
        icon.style.color = "#050505"
        box.style.display = "block";
        gsap.to(nav, {
            x: "0%",
            duration: .5,
            ease: Power2,
        })
        flag = 1;
    }
    else {
        icon.style.color = "#f5f5f5"
        box.style.display = "none";
        gsap.to(nav, {
            x: "100%",
            duration: .5,
            ease: Power2,
        })
        flag = 0;
    }
})



