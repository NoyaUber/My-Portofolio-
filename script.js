/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.getElementById("nav-menu");

const closeMenu =
    document.getElementById("close-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuButton.addEventListener("click", () => {

    navMenu.classList.add("show");

});


closeMenu.addEventListener("click", () => {

    navMenu.classList.remove("show");

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});



/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    themeIcon.classList.remove(
        "fa-moon"
    );

    themeIcon.classList.add(
        "fa-sun"
    );

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-theme"
    );


    const isLight =
        document.body.classList.contains(
            "light-theme"
        );


    if (isLight) {

        themeIcon.classList.remove(
            "fa-moon"
        );

        themeIcon.classList.add(
            "fa-sun"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    }

    else {

        themeIcon.classList.remove(
            "fa-sun"
        );

        themeIcon.classList.add(
            "fa-moon"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});



/* =========================
   HEADER SCROLL
========================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});



/* =========================
   TYPING EFFECT
========================= */

const typingText =
    document.getElementById(
        "typing-text"
    );


const words = [

    "Web Developer",
    "Programmer",
    "Game Developer",
    "Creative Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    }

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting
            ? 50
            : 100;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {


            filterButtons.forEach(
                (btn) => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projectCards.forEach(
                (card) => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.style.display =
                            "block";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

});



/* =========================
   SKILLS
========================= */

const skillSection =
    document.querySelector(
        ".skills"
    );


const skillProgress =
    document.querySelectorAll(
        ".skill-progress"
    );


let skillAnimated = false;


function animateSkills() {

    if (skillAnimated) {

        return;

    }


    const sectionTop =
        skillSection.getBoundingClientRect()
            .top;


    const screenHeight =
        window.innerHeight;


    if (
        sectionTop <
        screenHeight - 100
    ) {

        skillProgress.forEach(
            (bar) => {

                const width =
                    bar.dataset.width;

                bar.style.width =
                    width;

            }
        );


        skillAnimated = true;

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".music-layout, " +
        ".games-grid, " +
        ".about-grid, " +
        ".skill-card, " +
        ".project-card, " +
        ".contact-grid"
    );


revealElements.forEach(
    (element) => {

        element.classList.add(
            "reveal"
        );

    }
);


function revealOnScroll() {

    const triggerBottom =
        window.innerHeight * 0.88;


    revealElements.forEach(
        (element) => {

            const boxTop =
                element.getBoundingClientRect()
                    .top;


            if (
                boxTop <
                triggerBottom
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            const sectionId =
                section.getAttribute(
                    "id"
                );


            if (
                scrollPosition >=
                    sectionTop &&

                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {


                navLinks.forEach(
                    (link) => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${sectionId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav
);



/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.getElementById(
        "back-top"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        }

        else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================
   CONTACT FORM
   EMAILJS
========================= */


/*
 * Template ID milik kamu
 */

const EMAILJS_TEMPLATE_ID =
    "template_x6gdhjp";


/*
 * GANTI bagian ini dengan
 * Service ID dari EmailJS kamu.
 */

const EMAILJS_SERVICE_ID =
    "service_6prtdfd";


const contactForm =
    document.getElementById(
        "contact-form"
    );


const formMessage =
    document.getElementById(
        "form-message"
    );


const submitButton =
    document.getElementById(
        "submit-button"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /*
         * Pastikan EmailJS sudah
         * dimuat sebelum mengirim.
         */

        if (
            typeof emailjs ===
            "undefined"
        ) {

            formMessage.textContent =
                "Email service belum siap. Coba refresh halaman.";

            formMessage.style.color =
                "#ef4444";

            return;

        }


        /*
         * Ubah tombol menjadi
         * status loading.
         */

        submitButton.disabled =
            true;


        submitButton.innerHTML = `
            Mengirim...
            <i class="fa-solid fa-spinner fa-spin"></i>
        `;


        formMessage.textContent =
            "Sedang mengirim pesan...";


        formMessage.style.color =
            "var(--primary)";


        /*
         * Kirim form ke EmailJS
         */

        emailjs.sendForm(

            EMAILJS_SERVICE_ID,

            EMAILJS_TEMPLATE_ID,

            contactForm

        )


        /*
         * BERHASIL
         */

        .then(
            function () {

                formMessage.textContent =
                    "✓ Pesan berhasil dikirim!";

                formMessage.style.color =
                    "#4ade80";


                contactForm.reset();


                submitButton.disabled =
                    false;


                submitButton.innerHTML = `
                    Kirim Pesan
                    <i class="fa-solid fa-paper-plane"></i>
                `;

            }
        )


        /*
         * GAGAL
         */

        .catch(
            function (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );


                formMessage.textContent =
                    "✕ Pesan gagal dikirim. Periksa konfigurasi EmailJS.";

                formMessage.style.color =
                    "#ef4444";


                submitButton.disabled =
                    false;


                submitButton.innerHTML = `
                    Kirim Pesan
                    <i class="fa-solid fa-paper-plane"></i>
                `;

            }
        );

    }
);



/* =========================
   CURRENT YEAR
========================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();

/* =========================
   TIC TAC TOE
========================= */

(() => {
    const board = document.getElementById("ttt-board");
    const status = document.getElementById("ttt-status");
    const reset = document.getElementById("ttt-reset");
    if (!board || !status || !reset) return;

    const cells = [...board.querySelectorAll(".ttt-cell")];
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    let state = Array(9).fill("");
    let turn = "X";
    let active = true;

    function winner() {
        return wins.find(([a, b, c]) => state[a] && state[a] === state[b] && state[a] === state[c]);
    }

    function render() {
        cells.forEach((cell, i) => {
            cell.textContent = state[i];
            cell.classList.toggle("x", state[i] === "X");
            cell.classList.toggle("o", state[i] === "O");
            cell.disabled = Boolean(state[i]) || !active;
        });
    }

    function play(index) {
        if (!active || state[index]) return;
        state[index] = turn;
        const win = winner();
        if (win) {
            active = false;
            win.forEach(i => cells[i].classList.add("winner"));
            status.textContent = `${turn} menang!`;
        } else if (state.every(Boolean)) {
            active = false;
            status.textContent = "Seri!";
        } else {
            turn = turn === "X" ? "O" : "X";
            status.textContent = `Giliran ${turn}`;
        }
        render();
    }

    cells.forEach(cell => cell.addEventListener("click", () => play(Number(cell.dataset.index))));
    reset.addEventListener("click", () => {
        state = Array(9).fill("");
        turn = "X";
        active = true;
        status.textContent = "Giliran X";
        cells.forEach(cell => cell.classList.remove("winner"));
        render();
    });
    render();
})();


/* =========================
   SPIN WHEEL
========================= */

(() => {
    const canvas = document.getElementById("spin-wheel");
    const input = document.getElementById("wheel-options");
    const button = document.getElementById("spin-button");
    const result = document.getElementById("wheel-result");
    if (!canvas || !input || !button || !result) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const cssSize = 420;
    canvas.width = cssSize * dpr;
    canvas.height = cssSize * dpr;
    ctx.scale(dpr, dpr);

    let rotation = 0;
    let spinning = false;

    function options() {
        const values = input.value.split(",").map(v => v.trim()).filter(Boolean);
        return [...new Set(values)].slice(0, 16);
    }

    function draw() {
        const items = options();
        const center = cssSize / 2;
        const radius = 190;
        ctx.clearRect(0, 0, cssSize, cssSize);
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(rotation);
        const slice = (Math.PI * 2) / Math.max(items.length, 1);

        items.forEach((item, i) => {
            const start = i * slice;
            const end = start + slice;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, start, end);
            ctx.closePath();
            ctx.fillStyle = i % 2 ? "#6847ee" : "#7c5cff";
            ctx.globalAlpha = 0.86;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "rgba(255,255,255,.12)";
            ctx.stroke();

            ctx.save();
            ctx.rotate(start + slice / 2);
            ctx.fillStyle = "#fff";
            ctx.font = "600 14px Poppins, sans-serif";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            const label = item.length > 18 ? `${item.slice(0, 17)}…` : item;
            ctx.fillText(label, radius - 18, 0);
            ctx.restore();
        });

        ctx.beginPath();
        ctx.arc(0, 0, 38, 0, Math.PI * 2);
        ctx.fillStyle = "#0a0a0f";
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.18)";
        ctx.stroke();
        ctx.restore();
    }

    function spin() {
        if (spinning) return;
        const items = options();
        if (items.length < 2) {
            result.textContent = "Masukkan minimal 2 pilihan";
            return;
        }
        spinning = true;
        button.disabled = true;
        result.textContent = "Memutar…";

        const winnerIndex = Math.floor(Math.random() * items.length);
        const slice = (Math.PI * 2) / items.length;
        const target = -(winnerIndex * slice + slice / 2) + Math.PI * 1.5;
        const current = rotation;
        const normalized = ((target - current) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const finalRotation = current + Math.PI * 2 * 5 + normalized;
        const duration = 3600;
        const startTime = performance.now();

        function frame(now) {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - progress, 4);
            rotation = current + (finalRotation - current) * eased;
            draw();
            if (progress < 1) {
                requestAnimationFrame(frame);
            } else {
                spinning = false;
                button.disabled = false;
                result.textContent = `Hasil: ${items[winnerIndex]}`;
            }
        }
        requestAnimationFrame(frame);
    }

    input.addEventListener("input", draw);
    button.addEventListener("click", spin);
    draw();
})();


/* =========================
   SMALL PERFORMANCE HELPERS
========================= */

if ("IntersectionObserver" in window) {
    const lazyFrames = document.querySelectorAll("iframe[loading='lazy']");
    lazyFrames.forEach(frame => frame.setAttribute("loading", "lazy"));
}
