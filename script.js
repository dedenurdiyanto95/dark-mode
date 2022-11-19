let toggle = document.getElementById("switch");
let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme ;dark)").matches
    ? "dark"
    : "light");

if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

if (storedTheme == "dark") {
  darkMode.style.display = "none";
  lightMode.style.display = "block";
}

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  var targetTheme = "light";
  darkMode.style.display = "block";
  lightMode.style.display = "none";

  if (currentTheme == "light") {
    targetTheme = "dark";
    darkMode.style.display = "none";
    lightMode.style.display = "block";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
