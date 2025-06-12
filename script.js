const btnNav = document.querySelector(".mobile");
const headerEl = document.querySelector(".head");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("head-open");
});

///////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Remove active-link from all head-link-in elements
    document.querySelectorAll(".head-link-in").forEach((el) => {
      el.classList.remove("active-link");
    });

    // Add active-link to the clicked link if it's a navigation link
    if (link.classList.contains("head-link-in")) {
      link.classList.add("active-link");
    }

    // Smooth scroll to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Smooth scroll to internal section
    else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl?.scrollIntoView({ behavior: "smooth" });
    }

    // External links handled manually
    else if (
      href === "https://www.linkedin.com/in/ycl-yichen-lin" ||
      href === "Yi-Chen Lin Resume.pdf" ||
      href === "yichen.lin.2004@gmail.com" ||
      href === "tel:236-777-6823"
    ) {
      e.preventDefault();
      window.location.href = href;
    }

    // Don't block regular .html links — let browser handle them normally

    // Toggle mobile nav menu
    if (link.classList.contains("head-link-in")) {
      headerEl.classList.toggle("head-open");
    }
  });
});

///////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
