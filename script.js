/* =================================
   VEXORA // INTERACTIONS
================================= */


/* NAVBAR ACTIVE LINK */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* REVEAL ON SCROLL */

const revealElements = document.querySelectorAll(
    ".about, .roster, .rules, .discord, .player"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* MOUSE PARALLAX */

const character = document.querySelector(".character");

document.addEventListener("mousemove", event => {

    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);

    if (character) {

        character.style.transform =
            `translate(${x * 12}px, ${y * 8}px)`;

    }

});