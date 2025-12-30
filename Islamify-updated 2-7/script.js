document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkToggle");
  const html = document.documentElement;
  const body = document.body;

  // Load saved theme
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    html.setAttribute("data-theme", "dark");
    body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  } else {
    html.removeAttribute("data-theme");
    body.classList.remove("dark-mode");
    if (toggle) toggle.checked = false;
  }

  // Handle toggle change
  if (toggle) {
    toggle.addEventListener("change", () => {
      const isNowDark = toggle.checked;

      if (isNowDark) {
        html.setAttribute("data-theme", "dark");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        html.removeAttribute("data-theme");
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Animate navbar on load
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.add("navbar-animated");
  }
});
