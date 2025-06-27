// Cursor Effect
var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursorBlur");

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorBlur.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
});

// Hamburger Menu
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// Navbar Animation
gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1.5,
    }
});

// Page Scroll Animations
gsap.from("section h1, section h2, section p", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "section",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
    },
});
