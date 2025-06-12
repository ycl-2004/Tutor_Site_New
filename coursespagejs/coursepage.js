document.addEventListener("DOMContentLoaded", function () {
  const chapterBlocks = document.querySelectorAll(".chapter-block");
  chapterBlocks.forEach((block) => {
    const title = block.querySelector(".chapter-sections h2");
    if (title) {
      title.style.cursor = "pointer";
      title.addEventListener("click", function () {
        block.classList.toggle("collapsed");
        const content = Array.from(block.children).filter(
          (el) =>
            !el.classList.contains("chapter-sections") ||
            el.querySelector("h2") !== title
        );
        content.forEach((el) => {
          if (block.classList.contains("collapsed")) {
            el.style.maxHeight = "0";
            el.style.overflow = "hidden";
            el.style.opacity = "0";
            el.style.transition =
              "max-height 0.4s cubic-bezier(.4,2,.6,1), opacity 0.3s";
          } else {
            el.style.maxHeight = "500px";
            el.style.opacity = "1";
            el.style.transition =
              "max-height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.3s";
            el.style.overflow = "";
          }
        });
      });
    }
    // Start expanded
    block.classList.remove("collapsed");
    const content = Array.from(block.children).filter(
      (el) => !el.classList.contains("chapter-sections")
    );
    content.forEach((el) => {
      el.style.maxHeight = "500px";
      el.style.opacity = "1";
      el.style.transition =
        "max-height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.3s";
    });
  });

  // Select all <a> tags
  const protectedLinks = document.querySelectorAll("a");

  protectedLinks.forEach((link) => {
    // Only protect links that are not '#' and not the back-home button
    if (
      link.getAttribute("href") !== "#" &&
      !link.classList.contains("back-home-btn")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const password = prompt(
          "Please enter the password to access this content:"
        );
        if (password === "ycyc") {
          // Correct password, proceed to link
          if (link.target === "_blank") {
            window.open(link.href, "_blank");
          } else {
            window.location.href = link.href;
          }
        } else if (password !== null) {
          alert("Incorrect password!");
        }
      });
    }
  });
});
