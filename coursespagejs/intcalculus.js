document.addEventListener("DOMContentLoaded", function () {
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
