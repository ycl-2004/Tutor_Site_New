document.addEventListener("DOMContentLoaded", function () {
  // Placeholder for future interactivity for Differential Calculus page
  // Add custom JS here if needed

  // Password protection for solution links
  document.querySelectorAll(".solution-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const password = prompt(
        "Please enter the password to access the solution:"
      );
      if (password === "ycyc") {
        window.open(link.href, link.target || "_self");
      } else if (password !== null) {
        alert("Incorrect password!");
      }
    });
  });
});
