/* =========================
   DOM READY
========================= */
document.addEventListener("DOMContentLoaded", () => {
    initSliders();
    initSearchToggle();
    initHeaderActive();
    initDataAttributes();
    initSubnavDropdown();
    initAOS();
    initCounter();
});

/* =========================
   SLIDERS (SLICK)
========================= */
function initSliders() {
    if (typeof $ === "undefined" || !$.fn.slick) return;

    // Banner Slider
    if ($(".banner-slider").length) {
        $(".banner-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "ease-in-out",
        });
    }

    // Gallery Slider
    if ($(".gallery-slider").length) {
        $(".gallery-slider").slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            variableWidth: true,
        });
    }

    // News Card Slider
    if ($(".news-card-slider").length) {
        $(".news-card-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2 } },
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 576, settings: { slidesToShow: 1 } },
            ],
        });
    }

    if ($(".srm-campus-slider").length) {
        $(".srm-campus-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: $('.arrow-prev'),
            nextArrow: $('.arrow-next'),
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 576, settings: { slidesToShow: 2 } },
                 { breakpoint: 450, settings: { slidesToShow: 1 } },
            ],
        });
    }
}

/* =========================
   SEARCH TOGGLE
========================= */
function initSearchToggle() {
    toggleSearch("search_toggle", ".desk-search .header-search");
    toggleSearch("search_toggle2", ".responsive-search .header-search");
}

function toggleSearch(btnId, targetSelector) {
    const btn = document.getElementById(btnId);
    const box = document.querySelector(targetSelector);
    if (!btn || !box) return;

    const searchIcon = btn.querySelector(".search-icon");
    const closeIcon = btn.querySelector(".close-icon");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        box.classList.toggle("active");
        searchIcon?.classList.toggle("d-none");
        closeIcon?.classList.toggle("d-none");
    });
}

/* =========================
   HEADER ACTIVE ON SCROLL
========================= */
function initHeaderActive() {
    const header = document.getElementById("fixedHeader");
    if (!header) return;

    const toggleHeaderClass = () => {
        if (window.scrollY > 50) {
            header.classList.add("activeHeader");
        } else {
            header.classList.remove("activeHeader");
        }
    };

    window.addEventListener("scroll", toggleHeaderClass);
    window.addEventListener("load", toggleHeaderClass);
}

/* =========================
   DATA ATTRIBUTES HANDLER
========================= */
function initDataAttributes() {
    document.querySelectorAll(".data-attribute").forEach((el) => {
        const overlay = el.getAttribute("data-overlay-dark");
        if (overlay) {
            el.style.setProperty("--overlay-opacity", overlay * 0.1);
        }

        const ratio = el.getAttribute("data-aspect");
        if (ratio) {
            el.style.aspectRatio = ratio;
        }

        const position = el.getAttribute("data-position");
        if (position) {
            el.style.backgroundPosition = position;
            const img = el.querySelector("img");
            if (img) img.style.objectPosition = position;
        }
    });
}

/* =========================
   SUBNAV DROPDOWN (RESPONSIVE)
========================= */
function initSubnavDropdown() {
    document.querySelectorAll(".subnav-dropdown").forEach((wrap) => {
        const ul = wrap.parentElement.querySelector(".nav.sub-nav ul");
        if (!ul) return;

        const active = ul.querySelector("li.active");
        const currentText = active ? active.textContent.trim() : "Select Tab";

        const dropdown = document.createElement("div");
        dropdown.className = "dropdown w-100";

        const button = document.createElement("button");
        button.className = "subnav-dropdown-select-rs tab-dropdown-btn";
        button.type = "button";
        button.dataset.bsToggle = "dropdown";
        button.textContent = currentText;

        const menu = document.createElement("ul");
        menu.className = "dropdown-menu w-100";

        ul.querySelectorAll("li").forEach((liItem) => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = "#";
            a.className = "dropdown-item";
            a.textContent = liItem.textContent;
            if (liItem.classList.contains("active")) a.classList.add("active");

            a.addEventListener("click", (e) => {
                e.preventDefault();
                button.textContent = liItem.textContent;
                liItem.click();

                menu.querySelectorAll("a").forEach((el) => el.classList.remove("active"));
                a.classList.add("active");
            });

            li.appendChild(a);
            menu.appendChild(li);
        });

        dropdown.appendChild(button);
        dropdown.appendChild(menu);
        wrap.appendChild(dropdown);
    });
}

/* =========================
   AOS ANIMATION
========================= */
function initAOS() {
    if (typeof AOS === "undefined") return;

    AOS.init({
        once: true,
        offset: 120,
        easing: "ease-in-out",
        duration: 900,
        delay: 50,
    });

    window.addEventListener("load", () => AOS.refresh());
}

/* =========================
   COUNTER ANIMATION
========================= */
function initCounter() {
    const counters = document.querySelectorAll(".counter");
    const section = document.querySelector(".count-card-list");
    if (!counters.length || !section) return;

    let started = false;

    window.addEventListener("scroll", () => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight && !started) {
            counters.forEach((counter) => {
                const target = +counter.dataset.target;
                let count = 0;
                const speed = Math.max(1, target / 150);

                const update = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.floor(count) + "+";
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                update();
            });
            started = true;
        }
    });
}

/* ===========================
    sub-menu-sticky-scroll
============================= */
$(document).ready(function () {
  $('.sub-menu-ul a').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    if ($(target).length) {
        let offset = 225;
     
    if ($(window).width() < 1200) {
        offset = 138;
    }
    if ($(window).width() < 576) {
        offset = 168;
    }
    $('html, body').animate({
        scrollTop: $(target).offset().top - offset
    }, 500);
    }
  });
});
/* ===========================
        sub-menu-active
============================= */
 
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".sub-menu-ul a");
    const sections = document.querySelectorAll("section div[id]");
    // OFFSET FUNCTION
    function getOffset() {
        let offset = 225;
        if (window.innerWidth < 1200) {
            offset = 138;
        }
        if (window.innerWidth < 576) {
            offset = 168;
        }
        return offset;
    }
    // CLICK ACTIVE
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuLinks.forEach(item => {
                item.parentElement.classList.remove("active");
            });
            this.parentElement.classList.add("active");
        });
    });
    // SCROLL ACTIVE
    window.addEventListener("scroll", function () {
        let current = "";
        let offset = getOffset();
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            if (
                window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }
        });
        menuLinks.forEach(link => {
            link.parentElement.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.parentElement.classList.add("active");
            }
        });
    });
});

/* ===========================
        testimonial
============================= */

$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.slick-bottom-prev'),
    nextArrow: $('.slick-bottom-next')
});
/* ===========================
        end testimonial
============================= */