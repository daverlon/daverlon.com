const btn = document.getElementById('theme-toggle');
const label = document.getElementById('toggle-label');

if (document.documentElement.classList.contains("dark")) {
    label.textContent = "light";
} else {
    label.textContent = "dark";
}

btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');

    localStorage.setItem("theme", isDark ? "dark" : "light");
    label.textContent = isDark ? "light" : "dark";
});